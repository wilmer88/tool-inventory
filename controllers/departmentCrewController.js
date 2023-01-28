const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/addDepartmentCrew/new", (req, res) => {
  res.render("addDepartmentCrew");
});

router.post("/api/departmentCrew", (req, res) => {
    console.log(req.body);
  
    db.Departme.create(req.body)
      .then((departmentCrew) => {
        res.json({
          error: false,
          data: departmentCrew,
          message: "successfully created new resource",
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
  module.exports = router;