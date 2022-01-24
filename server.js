// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create an instance of the express app.
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var { engine } = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/toolController.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
