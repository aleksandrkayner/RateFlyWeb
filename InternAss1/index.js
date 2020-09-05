require("dotenv").config();
const https = require("https");
// # Global Variables
// shopify_app_b64key = os.environ['SHOPIFY_API_KEY']
// shopify_api_version = os.environ['SHOPIFY_API_VERSION']
// auth_net_url = os.environ['AUTH_NET_URL']
// auth_net_name = os.environ['AUTH_NET_NAME']
// auth_net_key = os.environ['AUTH_NET_KEY']
// headers = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   Authorization: "API_KEY"
// };
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const API_KEY = process.env.API_KEY;
const auth = Buffer.from(SHOPIFY_API_KEY).toString("base64");
const shopify_api_version = process.env.SHPIFY_API_VERSION;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const password = process.env.PASSWORD;
const username = process.env.USER_NAME;

function getData() {
  const scopes = "read_orders,write_products";
  const redirect_uri = "http://localhost/3000";

  // const options = {
  //   url: `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07/products.json`,
  //   host: `${API_KEY}:${password}@aleksandrkayner.myshopify.com`,
  //   path: "/admin/api/2020-07/products.json",
  //   port: 3000,
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: auth
  //   }
  // };
  ("use-strict");
  //https://{username}:{password}@{shop}.myshopify.com/admin/api/{api-version}/{resource}.json
  //{event['shop_domain']}/admin/api/{shopify_api_version}/orders/{event['order_id']}
  //https://7c4de7151a47ea38d7bc5aaa6095944a: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@aleksandrkayner.myshopify.com/admin/api/2020-07/orders.json
  // https.get(
  //   `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07/products.json`,

  //   result => {
  //     //console.log(result);
  //     var dataQueue = "";
  //     result.on("data", function(dataBuffer) {
  //       dataQueue += dataBuffer;
  //     });
  //     result.on("end", function() {
  //       console.log(JSON.parse(dataQueue));
  //       return dataQueue;
  //     });
  //   }
  // );

  // const options = {
  //   hostname: `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07/products.json`,
  //   port: 443,
  //   path: "/admin/api/2020-07/products.json",
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: auth
  //   }
  // };

  const options = {
    hostname: `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07/products.json`, // your host name
    path: "/products.json", // your end point
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`
    }
  };
  const req = https.get(
    `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07/products.json`,
    options,
    res => {
      //console.log("statusCode:", res.statusCode);
      //console.log("headers:", res.headers);
      let data = "";
      res.on("data", d => {
        // console.log(d);
        data += d;
      });
      res.on("end", () => {
        let d = JSON.parse(data);
        for (let i in d) {
          console.log(i.products);
        }
        console.log(d.products[0].title);
      });
    }
  );
  req.on("error", e => {
    console.error(e);
  });
  req.end();
}

getData();

const updateOrderPayment = (orderAmount, orderNumber, url, headers = null) => {
  const obj = {
    transaction: "USD",
    amount: orderAmount,
    kind: "capture",
    gateaway: "manual"
  };
  const body = JSON.stringify(obj);
  const options = {
    hostname: `https://${API_KEY}:${password}@aleksandrkayner.myshopify.com/admin/api/2020-07`,
    path: "/product.json",
    method: "POST",
    headers: headers
  };
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
      process.stdout.write(d);
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.write(body);
  req.end();
  logShopifyResponse(orderNumber, body);
  return JSON.parse(req.data);
};

const logAuthorizeNetResponse = (orderNumber, result) => {
  log = {
    source: "authorize.net",
    order_number: orderNumber,
    messages_result_code: result.transactionResponse.responseCode,
    transaction_response_result_code: result.messages.resultCode,
    transaction_response_message_code: result.trasactionResponse.message
      ? result.transactionResponse.messages[0].code
      : "",
    transaction_response_message_text: result.trasactionResponse.message
      ? result.transactionResponse.messages[0].description
      : "",
    transaction_response_error_code: result.trasactionResponse.errors
      ? result.transactionResponse.errors[0].errorCode
      : "",
    transaction_response_error_text: result.trasactionResponse.errors
      ? result.transactionResponse.errors[0].errorText
      : "",
    transaction_id: result.transactionResponse.transId,
    ref_transaction_id: result.transactionResponse.refTransID
  };
  console.log(JSON.stringify(log));
};

const logShopifyResponse = (orderNumber, result) => {
  const log = {
    source: "shopify",
    order_number: orderNumber,
    transaction_id: result.transaction.id,
    kind: result.transaction.kind,
    gateway: result.transaction.gateway,
    status: result.transaction.status,
    message: result.transaction.message,
    amount: result.transaction.amount,
    currency: result.transaction.currency,
    created_at: result.transaction.created_at
  };
  console.log(JSON.stringify(log));
};

const lambdaHandler = (event, context) => {
  const shop_api_url = `https://${event.shop_domain}/admin/api/${shopify_api_version}/orders/${event.order_id}`;
  const transaction_url = `${shop_api_url}/transactions.json`;
  const order_url = `${shop_api_url}.json`;
  const metafields_url = `${shop_api_url}/metafields.json`;
  let orderAmount = 0;

  // Get Order amount
  if (event.action_source === "capture") {
    const resultTemp = getData(transaction_url, headers);
    const transactions = () => {
      for (let trxn in resultTemp.transactions) {
        if (trxn.kind == "capture") {
          return trxn;
        }
      }
      orderAmount = transactions[-1].amount;
    };
  } else {
    const resultTemp = getData(order_url, headers);
    orderAmount = resultTemp.order.total_price;
  }
  // Get Order financial status
  result = getData(order_url, headers);
  const financial_status = result.order.financial_status;

  // Get Order meta data for Auth.net
  result2 = getData(metafields_url, headers);
  metadata = md.hasOwnProperty("authorize.net_auth_id") && md;

  if (metadata.length > 0) {
    obj = {
      createTransactionRequest: {
        merchantAuthentication: {
          name: auth_net_name,
          transactionKey: auth_net_key
        },
        transactionRequest: {
          transactionType: "priorAuthCaptureTransaction",
          amount: order_amount,
          refTransId: metadata[0].value,
          order: {
            invoiceNumber: event.order_number
          }
        }
      }
    };
  }
  let result3 = post_data(auth_net_url, obj, headers);
  console.log("ran");
  log_authorize_net_response(event.order_number, result3);
  if (
    result3.messages.resultCode == "Ok" &&
    result3.transactionResponse.responseCode == "1" &&
    result3.transactionResponse.messages[0].code == "1" &&
    financial_status != "paid" &&
    financial_status != "partially_paid"
  ) {
    update_order_payment(
      order_amount,
      event.order_number,
      transaction_url,
      headers
    );
  }
};
