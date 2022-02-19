// Dependencies
const express = require("express");
// Create an instance of the express app.
const app = express();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
const db = require("./models");
const routes = require("./controllers/toolController.js");
//espress handlebars node package. set handlebars
const exphbs = require("express-handlebars");

//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
// handlebars: allowInsecurePrototypeAccess(exphbs)

// app.use(express.static("public"));

// var { engine } = require("express-handlebars");
//Set Handlebars as the default templating engine. parse request body as json
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.get("/", (req, res) => {
  res.render("frontPage");
});
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
