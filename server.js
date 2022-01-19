// Dependencies
var express = require("express");

var { engine } = require("express-handlebars");
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/founTools", function (req, res) {
  res.render("foundTools");
});
app.get("/add", function (req, res) {
  res.render("addTool");
});

app.get("/", function (req, res) {
  res.render("frontPage");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
