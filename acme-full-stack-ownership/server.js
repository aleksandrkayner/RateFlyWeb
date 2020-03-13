const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
app.us;

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/users", (req, res, next) => {
  db.readUsers()
    .then(users => res.send(users))
    .catch(next);
});

app.get("/api/things", (req, res, next) => {
  db.readThings()
    .then(things => res.send(things))
    .catch(next);
});

app.get("/api/user_things", (req, res, next) => {
  db.readUserThings()
    .then(userThings => res.send(userThings))
    .catch(next);
});

app.post("/api/users", (req, res, next) => {
  db.createUser(req.body)
    .then(user => res.send(user))
    .catch(next);
});

app.post("/api/things", (req, res, next) => {
  db.createThing(req.body)
    .then(thing => res.send(thing))
    .catch(next);
});

app.post("/api/user_things", (req, res, next) => {
  db.createUserThing(req.body)
    .then(userThing => res.send(userThing))
    .catch(next);
});

app.delete("/api/user_things/:id", (req, res, next) => {
  db.destroyUserThing(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.delete("/api/users/:id", (req, res, next) => {
  db.destroyUser(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.delete("/api/things/:id", (req, res, next) => {
  db.destroyThing(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.use((req, res, next) => {
  next({
    status: 404,
    message: `Page not found for ${req.method} ${req.url}`
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || JSON.stringify(err)
  });
});

const port = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
