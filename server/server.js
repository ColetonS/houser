require("dotenv").config();
const express = require("express");
const ctrl = require("./controller");
const massive = require("massive");

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

const SERVER_PORT = 4000;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () =>
      console.log(`${SERVER_PORT} chips delicious!`)
    );
  })
  .catch(err => console.log(`Can't connect to db.`, err));

  app.get('/api/properties', ctrl.getProperties)