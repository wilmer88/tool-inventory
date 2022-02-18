// Dependencies
const express = require("express");
const routes = require("./controllers/toolController.js");
//espress handlebars node package. set handlebars
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
// handlebars: allowInsecurePrototypeAccess(exphbs)

db = require("./models");

// app.use(express.static("public"));

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.use(routes);
// var { engine } = require("express-handlebars");
//Set Handlebars as the default templating engine. parse request body as json
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

// const res = require("express/lib/response");

// Requiring our models for syncing
// var db = require("./models/toolTable.js");

// Set the port of our application


// app.get("/api/alltools", (req, res)=>{
//   res.render("allTools")
// })

// db.sequelize.sync().then(function () {

// });

// Start our server so that it can begin listening to client requests.
// pp.get("/api/alltools",(req,res)=>{

// });

// router.get("/api/alltools", function (req, res) {
//   db.findAll({}).then(function (alldbTableTools) {
//    console.log(alldbTableTools)
//     res.render("allTools", {alldbTableTools:alldbTableTools});

//   });
