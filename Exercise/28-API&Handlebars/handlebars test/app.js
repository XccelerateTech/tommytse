const express = require("express");
const app = express();
const hb = require("express-handlebars");

app.engine("handlebars", hb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", (req, res) => {
  res.render("people");
});
app.listen(3000);
