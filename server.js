// Dependencies
const express = require("express");
//espress handlebars node package. set handlebars
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();
const db = require("./models");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

const routes = require("./controllers/toolController.js");

//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
// handlebars: allowInsecurePrototypeAccess(exphbs)

// app.use(express.static("public"));

// var { engine } = require("express-handlebars");
//Set Handlebars as the default templating engine. parse request body as json
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
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
