var express = require("express");

var router = express.Router();
var tool = require("../model/toolTable")

// Routes
router.get("/founTools", function (req, res) {
    res.render("foundTools");
  });
  router.get("/add", function (req, res) {
    res.render("addTool");
  });
  
  router.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/add.html"));
  
    res.render("frontPage");
  });
  router.get("/alltools", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/add.html"));
  
    res.render("allTools");
  });
  module.exports = router


     // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // var routeName = character.name.replace(/\s+/g, "").toLowerCase();