const express = require("express");
const bodyParser = require("body-parser");
const hb = require("express-handlebars");
const basicAuth = require("express-basic-auth");
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
// the Auth function and users authentication information
//const myAuthFunc = require("./Auth"); NOT USED IN WEEK3 AS WE ARE USING KNEX FOR AUTHENTICATION
module.exports = () => {
  let app = express();

  app.engine("handlebars", hb({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static("public"));
  //handle multiple users using the authentication information the users input
  app.use(
    basicAuth({
      authorizer: new AuthChallenger(knex),
      challenge: true,
      realm: "My Note Taking Application"
    })
  );
  return app;
};
