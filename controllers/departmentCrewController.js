const express = require("express");
const router = express.Router();
const db = require("../models");

// router.get("/byDepartment", (req, res) => {
//   res.render("itemsByDepartment");
// });

router.get("/byDepartment", (req, res) => {
  db.Item.findAll({
    include: db.DepartmentCrew

  })
    .then((itemsByDepartment) => {
      console.log(itemsByDepartment);
  
      res.render("itemsByDepartment", { departmentItems: itemsByDepartment});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to retrive allDepartmentCrew",
      });
    });
});




// /////////////////////////////////////////////////////////////////////////////////

router.get("/", (req, res) => {
  db.DepartmentCrew.findAll()
    .then((allDepartmentCrew) => {
      console.log(allDepartmentCrew)
      res.render("index", { departmentCrew:allDepartmentCrew});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to retrive allDepartmentCrew",
      });
    });
});

router.get("/addDepartmentCrew/new", (req, res) => {
  res.render("addDepartmentCrew");
});

router.post("/api/departmentCrew", (req, res) => {
    console.log(req.body);
  
    db.DepartmentCrew.create(req.body)
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