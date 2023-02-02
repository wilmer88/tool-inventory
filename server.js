// Dependencies
const express = require("express");
//espress handlebars node package. set handlebars
const exphbs = require("express-handlebars");
const path = require("path");

// Create an instance of the express app.
const app = express();
const db = require("./models");
const itemController = require("./controllers/toolController.js");
const departmentCrewController = require("./controllers/departmentCrewController.js");
const handlebars = require("handlebars");
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// handlebars: allowInsecurePrototypeAccess(exphbs)


//Set Handlebars as the default templating engine. parse request body as json
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine","handlebars");

app.use(itemController);
app.use(departmentCrewController);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});
// db.sequelize.sync({force: true}).then(function () {
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
