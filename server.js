// Dependencies
const express = require("express");

//espress handlebars node package
const exphbs = require("express-handlebars");


// Create an instance of the express app.
const app = express();


// var { engine } = require("express-handlebars");
//Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static("public"));



// const res = require("express/lib/response");

// Requiring our models for syncing
// var db = require("./models/toolTable.js");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);

});

// var routes = require("./controllers/toolController.js");
// app.use(routes);

// db.sequelize.sync().then(function () {
 
// });


// Start our server so that it can begin listening to client requests.
// pp.get("/api/alltools",(req,res)=>{

// });

