import React from "react";
import ReactDOM from "react-dom";

const { Component } = React;

class UserThingForm extends Component {
  constructor() {
    super();
    this.state = {
      thingId: "",
      userId: ""
    };
  }
  render() {
    const { things, users } = this.props;
    const { thingId, userId } = this.state;
    const onSubmit = ev => {
      ev.preventDefault();
      this.props.createUserThing({ thingId, userId });
    };
    return (
      <section>
        <form onSubmit={onSubmit}>
          <h2>Create User Thing</h2>
          <select
            value={thingId}
            onChange={ev => this.setState({ thingId: ev.target.value })}
          >
            <option value="">-- choose thing --</option>
            {things.map(thing => {
              return (
                <option value={thing.id} key={thing.id}>
                  {thing.name}
                </option>
              );
            })}
          </select>
          <select
            value={userId}
            onChange={ev => this.setState({ userId: ev.target.value })}
          >
            <option value="">-- choose user --</option>
            {users.map(user => {
              return (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button>Create</button>
        </form>
      </section>
    );
  }
}

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  render() {
    const { name } = this.state;
    const onSubmit = ev => {
      ev.preventDefault();
      this.props.createUser({ name });
    };
    return (
      <section>
        <form onSubmit={onSubmit}>
          <h2>Create User</h2>
          <input
            value={name}
            onChange={ev => this.setState({ name: ev.target.value })}
          />
          <button>Create</button>
        </form>
      </section>
    );
  }
}

class ThingForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  render() {
    const { name } = this.state;
    const onSubmit = ev => {
      ev.preventDefault();
      this.props.createThing({ name });
    };
    return (
      <section>
        <form onSubmit={onSubmit}>
          <h2>Create Thing</h2>
          <input
            value={name}
            onChange={ev => this.setState({ name: ev.target.value })}
          />
          <button>Create</button>
        </form>
      </section>
    );
  }
}
const Things = ({
  things,
  users,
  userThings,
  destroyUserThing,
  destroyThing
}) => {
  return (
    <section>
      <h2>Things ({things.length})</h2>
      <ul>
        {things.map(thing => {
          return (
            <li key={thing.id}>
              {thing.name}
              <button onClick={() => destroyThing(thing)}>x</button>

              <ul>
                {userThings
                  .filter(userThing => userThing.thingId === thing.id)
                  .map(userThing => {
                    return (
                      <li key={userThing.id}>
                        {users.find(user => user.id === userThing.userId).name}
                        <button onClick={() => destroyUserThing(userThing)}>
                          x
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
const Users = ({
  users,
  things,
  userThings,
  destroyUserThing,
  destroyUser
}) => {
  return (
    <section>
      <h2>Users ({users.length})</h2>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.name}
              <button onClick={() => destroyUser(user)}>x</button>
              <ul>
                {userThings
                  .filter(userThing => userThing.userId === user.id)
                  .map(userThing => {
                    return (
                      <li key={userThing.id}>
                        {
                          things.find(thing => thing.id === userThing.thingId)
                            .name
                        }
                        <button onClick={() => destroyUserThing(userThing)}>
                          x
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      things: [],
      userThings: []
    };
  }
  componentDidMount() {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/things"),
      axios.get("/api/user_things")
    ])
      .then(responses => responses.map(response => response.data))
      .then(([users, things, userThings]) => {
        this.setState({ users, things, userThings });
      })
      .catch(ex => this.setState({ error: ex.response.data.message }));
  }
  render() {
    const createUserThing = async userThing => {
      try {
        const created = (await axios.post("/api/user_things", userThing)).data;
        this.setState({
          userThings: [...this.state.userThings, created],
          error: ""
        });
      } catch (ex) {
        this.setState({ error: ex.response.data.message });
      }
    };
    const createThing = async thing => {
      try {
        const created = (await axios.post("/api/things", thing)).data;
        this.setState({ things: [...this.state.things, created], error: "" });
      } catch (ex) {
        this.setState({ error: ex.response.data.message });
      }
    };

    const createUser = async user => {
      try {
        const created = (await axios.post("/api/users", user)).data;
        this.setState({ users: [...this.state.users, created], error: "" });
      } catch (ex) {
        this.setState({ error: ex.response.data.message });
      }
    };

    const destroyUserThing = async userThingToDestroy => {
      await axios.delete(`/api/user_things/${userThingToDestroy.id}`);
      this.setState({
        userThings: userThings.filter(
          userThing => userThing.id !== userThingToDestroy.id
        ),
        error: ""
      });
    };

    const destroyUser = async userToDestroy => {
      try {
        await axios.delete(`/api/users/${userToDestroy.id}`);
        this.setState({
          users: users.filter(user => user.id !== userToDestroy.id),
          error: ""
        });
      } catch (ex) {
        this.setState({ error: ex.response.data.message });
      }
    };
    const destroyThing = async thingToDestroy => {
      try {
        await axios.delete(`/api/things/${thingToDestroy.id}`);
        this.setState({
          things: things.filter(thing => thing.id !== thingToDestroy.id),
          error: ""
        });
      } catch (ex) {
        this.setState({ error: ex.response.data.message });
      }
    };
    const { things, users, userThings, error } = this.state;
    return (
      <div>
        <h1>Acme Ownership</h1>
        {!!error && <div className="error">{error}</div>}
        <div className="forms">
          <UserForm createUser={createUser} />
          <ThingForm createThing={createThing} />
          <UserThingForm
            users={users}
            things={things}
            createUserThing={createUserThing}
          />
        </div>
        <div className="lists">
          <Users
            users={users}
            things={things}
            userThings={userThings}
            destroyUserThing={destroyUserThing}
            destroyUser={destroyUser}
          />
          <Things
            users={users}
            things={things}
            userThings={userThings}
            destroyUserThing={destroyUserThing}
            destroyThing={destroyThing}
          />
        </div>
      </div>
    );
  }
}
const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
