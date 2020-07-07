
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("home");
});

app.post("/", function(req, res) {
  res.redirect("/appointments");
});

app.get("/appointments", function(req, res) {
  res.render("appointments");
});

app.post("/appointments", function(req, res) {
  res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3002;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});
