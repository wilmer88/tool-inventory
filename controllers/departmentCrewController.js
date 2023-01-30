const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/addDepartmentCrew/new", (req, res) => {
  res.render("addDepartmentCrew");
});

router.get("/", (req, res) => {
  db.Department.findAll()
    .then((departments) => {
      // res.json(departments)
   res.render("index", {allDepartments:departments});
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

// router.get("/byDepartment", (req, res) => {
//   res.render("itemsByDepartment");
// });

router.get("/byDepartment/:routeName?", (req, res) => {
  console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      name: req.params.routeName,
    },
    include: db.Item
  
  }).then((itemsByDepartment) => {
    console.log(itemsByDepartment)
      // res.json(itemsByDepartment.Items);
      res.render("itemsByDepartment", { departmentItems: itemsByDepartment.Items, departmentName: itemsByDepartment});



// router.get("/byDepartment", (req, res) => {
//   db.Department.findAll({
//     include: db.Item
//   }).then((itemsByDepartment) => {
      // res.json(itemsByDepartment);
      // res.render("itemsByDepartment", { departmentItems: itemsByDepartment});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to retrive all items from this Department",
      });
    });
});




// /////////////////////////////Creat new department////////////////////////////////////////////////////





router.post("/api/departmentPost", (req, res) => {
    console.log(req.body);
  
    db.Department.create(req.body)
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