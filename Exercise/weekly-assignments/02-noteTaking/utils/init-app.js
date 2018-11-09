const express = require("express");
const bodyParser = require("body-parser");
const hb = require("express-handlebars");
const basicAuth = require("express-basic-auth");
// the Auth function and users authentication information
const myAuthFunc = require("./Auth");
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
      authorizer: myAuthFunc,
      challenge: true,
      realm: "My Note Taking Application"
    })
  );
  app.get("/", function(req, res) {
    res.render("index");
  });
  return app;
};
