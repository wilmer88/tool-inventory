var express = require("express");
const { json } = require("express/lib/response");

var router = express.Router();

var tool = require("../models/tool.js");

// Routes
router.get("/api/config", (req,res) => {
  res.json({
    success: true
  })
})

router.get("/", (req, res) => {
  res.render("frontPage");
});



// router.get("/foundTools", function (req, res) {
//   res.render("foundTools");
// });
// router.get("/add", function (req, res) {
//   res.render("addTool");
// });

// router.get("/", function (req, res) {
//   // res.sendFile(path.join(__dirname, "../public/add.html"));

//   res.render("frontPage");
// });
// router.get("/api/alltools", function (req, res) {
// res.render("allTools")

// });

// router.post("/api/new", (req,res)=>{
// tool.create( {
//   id: "456",
//   partName: "welding hood",
//   department: "welding",
//   count: "4",
//   createdAt: "2021-11-16 21:39:32",
//   updatedAt: "2021-11-16 21:39:32"
// }).then((result) => {
//   res.json(result);
// }).catch(err=>console.log(err))
// })
module.exports = router;

// Using a RegEx Pattern to remove spaces from character.name
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
// var routeName = character.name.replace(/\s+/g, "").toLowerCase();
