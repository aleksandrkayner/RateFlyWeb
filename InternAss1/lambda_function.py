import os
import requests
import json

# Global Variables
shopify_app_b64key = os.environ['SHOPIFY_API_KEY']
shopify_api_version = os.environ['SHOPIFY_API_VERSION']
auth_net_url = os.environ['AUTH_NET_URL']
auth_net_name = os.environ['AUTH_NET_NAME']
auth_net_key = os.environ['AUTH_NET_KEY']
headers = {'Accept': 'application/json', 'Content-Type': 'application/json',
           'Authorization': f'Basic {shopify_app_b64key}'}

def get_data(url, headers=None):
    req = requests.get(url, headers=headers)
    return json.loads(req.text)


def post_data(url, data, headers=None):
    body = json.dumps(data)
    req = requests.post(url, headers=headers, data=body)
    req.encoding = 'utf-8-sig'
    return json.loads(req.text)


def update_order_payment(order_amount, order_number, url, headers=None):
    obj = {
        'transaction': {
            'currency': 'USD',
            'amount': float(order_amount),
            'kind': 'capture',
            'gateway': 'manual'
        }
    }
    body = json.dumps(obj)
    req = requests.post(url, headers=headers, data=body)
    log_shopify_response(order_number, body)
    return json.loads(req.text)


def log_authorize_net_response(order_number, result):
    log = {
        'source': 'authorize.net',
        'order_number': order_number,
        'messages_result_code': result['transactionResponse']['responseCode'],
        'transaction_response_result_code': result['messages']['resultCode'],
        'transaction_response_message_code': result['transactionResponse']['messages'][0]['code'] if 'messages' in result['transactionResponse'] else '',
        'transaction_response_message_text': result['transactionResponse']['messages'][0]['description'] if 'messages' in result['transactionResponse'] else '',
        'transaction_response_error_code': result['transactionResponse']['errors'][0]['errorCode'] if 'errors' in result['transactionResponse'] else '',
        'transaction_response_error_text': result['transactionResponse']['errors'][0]['errorText'] if 'errors' in result['transactionResponse'] else '',
        'transaction_id': result['transactionResponse']['transId'],
        'ref_transaction_id': result['transactionResponse']['refTransID']
    }
    print(json.dumps(log))


def log_shopify_response(order_number, result):
    log = {
        'source': 'shopify',
        'order_number': order_number,
        'transaction_id': result['transaction']['id'],
        'kind': result['transaction']['kind'],
        'gateway': result['transaction']['gateway'],
        'status': result['transaction']['status'],
        'message': result['transaction']['message'],
        'amount': result['transaction']['amount'],
        'currency': result['transaction']['currency'],
        'created_at': result['transaction']['created_at']
    }
    print( )

def lambda_handler(event, context):
    shop_api_url = f"https://{event['shop_domain']}/admin/api/{shopify_api_version}/orders/{event['order_id']}"
    transaction_url = f'{shop_api_url}/transactions.json'
    order_url = f'{shop_api_url}.json'
    metafields_url = f'{shop_api_url}/metafields.json'

    # Get Order amount
    if event.get('action_source') == 'capture':
        result_temp = get_data(transaction_url, headers)
        transactions = [trxn for trxn in result_temp['transactions'] if trxn['kind'] == 'capture']
        order_amount = transactions[-1]['amount']
    else:
        result_temp = get_data(order_url, headers)
        order_amount = result_temp['order']['total_price']

    # Get Order financial status
    result = get_data(order_url, headers)
    financial_status = result['order']['financial_status']

    # Get Order meta data for Auth.net
    result = get_data(metafields_url, headers)
    metadata = [md for md in result['metafields'] if md['key'] == 'authorize.net_auth_id']

    if len(metadata) > 0:
        obj = {
            'createTransactionRequest': {
                'merchantAuthentication': {
                    'name': auth_net_name,
                    'transactionKey': auth_net_key
                },
                'transactionRequest': {
                    'transactionType': 'priorAuthCaptureTransaction',
                    'amount': float(order_amount),
                    'refTransId': metadata[0]['value'],
                    'order': {
                        'invoiceNumber': event['order_number']
                    }
                }
            }
        }
        result = post_data(auth_net_url, obj, headers)
        print('ran')
        log_authorize_net_response(event['order_number'], result)
        if result['messages']['resultCode'] == 'Ok' and result['transactionResponse']['responseCode'] == '1' and \
                result['transactionResponse']['messages'][0]['code'] == '1' and financial_status not in (
                'paid', 'partially_paid'):
            update_order_payment(order_amount, event['order_number'], transaction_url, headers)
