var express = require("express");
const { json } = require("express/lib/response");

var router = express.Router();

var db = require("../models/toolTable");

// Routes
router.get("/foundTools", function (req, res) {
  res.render("foundTools");
});
router.get("/add", function (req, res) {
  res.render("addTool");
});

router.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "../public/add.html"));

  res.render("frontPage");
});
router.get("/api/alltools", function (req, res) {
  db.findAll({}).then(function (tableTools) {
// var data = JSON.parse(tableTools)
    res.render("allTools", {tableTools: tableTools});
  
 
  });


  // res.sendFile(path.join(__dirname, "../public/add.html"));
});




module.exports = router;

// Using a RegEx Pattern to remove spaces from character.name
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
// var routeName = character.name.replace(/\s+/g, "").toLowerCase();
