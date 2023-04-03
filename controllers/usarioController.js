const express = require("express");
const router = express.Router();
const db = require("../models");


/// User Login Page
router.get("/usarioLogIn", (req, res) => {
 
  
    // res.json(departmentsDB)
    res.render("usarioLogIn" );


});

//// Create User

router.post("/api/userLogin", (req, res) => {
    console.log(req.body);
  
    db.Item.create(req.body)
      .then((newItem) => {
        res.json({
          error: false,
          data: newItem,
          message: "successfully log in",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to create resource.",
        });
      });
  });