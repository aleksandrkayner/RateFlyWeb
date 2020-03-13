const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_db"
);

client.connect();

const sync = async () => {
  const SQL = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    DROP TABLE IF EXISTS user_things;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS things;
    CREATE TABLE users(
      id UUID PRIMARY KEY default uuid_generate_v4(),
      name VARCHAR(255) NOT NULL UNIQUE,
      CHECK (char_length(name) > 0)
    );
    CREATE TABLE things(
      id UUID PRIMARY KEY default uuid_generate_v4(),
      name VARCHAR(255) NOT NULL UNIQUE,
      CHECK (char_length(name) > 0)
    );
    CREATE TABLE user_things(
      id UUID PRIMARY KEY default uuid_generate_v4(),
      "userId" UUID REFERENCES users(id),
      "thingId" UUID REFERENCES things(id)
    );
  `;
  client.query(SQL);
  const [moe, larry, lucy, ethyl, foo, bar, bazz] = await Promise.all([
    createUser({ name: "moe" }),
    createUser({ name: "larry" }),
    createUser({ name: "lucy" }),
    createUser({ name: "ethyl" }),
    createThing({ name: "foo" }),
    createThing({ name: "bar" }),
    createThing({ name: "bazz" })
  ]);
  Promise.all([
    createUserThing({
      userId: moe.id,
      thingId: foo.id
    }),
    createUserThing({
      userId: moe.id,
      thingId: bar.id
    }),
    createUserThing({
      userId: lucy.id,
      thingId: bar.id
    }),
    createUserThing({
      userId: ethyl.id,
      thingId: bar.id
    })
  ]);
};

const createUser = async user => {
  const SQL = "INSERT INTO users(name) values($1) returning *";
  return (await client.query(SQL, [user.name])).rows[0];
};

const createThing = async thing => {
  const SQL = "INSERT INTO things(name) values($1) returning *";
  return (await client.query(SQL, [thing.name])).rows[0];
};

const createUserThing = async userThing => {
  const SQL =
    'INSERT INTO user_things("thingId", "userId") values($1, $2) returning *';
  return (await client.query(SQL, [userThing.thingId, userThing.userId]))
    .rows[0];
};

const readUsers = async () => {
  const SQL = "SELECT * from users";
  return (await client.query(SQL)).rows;
};

const readThings = async () => {
  const SQL = "SELECT * from things";
  return (await client.query(SQL)).rows;
};

const readUserThings = async () => {
  const SQL = "SELECT * from user_things";
  return (await client.query(SQL)).rows;
};

const destroyUserThing = async id => {
  const SQL = "DELETE FROM user_things where id= $1";
  await client.query(SQL, [id]);
};

const destroyUser = async id => {
  const SQL = "DELETE FROM users where id= $1";
  await client.query(SQL, [id]);
};

const destroyThing = async id => {
  const SQL = "DELETE FROM things where id= $1";
  await client.query(SQL, [id]);
};

module.exports = {
  sync,
  readUsers,
  readUserThings,
  readThings,
  createThing,
  createUser,
  createUserThing,
  destroyUserThing,
  destroyUser,
  destroyThing
};
