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


// /////////////////////////////Gets Departmentitems////////////////////////////////////////////////////
router.get("/byDepartment/:routeName?", (req, res) => {
  console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      name: req.params.routeName,
    },
    include: db.Item
  
  }).then((itemsByDepartment) => {
    console.log(itemsByDepartment)

      res.render("itemsByDepartment", { departmentItems: itemsByDepartment.Items, departmentName: itemsByDepartment});

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

// /////////////////////////////Route to edit department////////////////////////////////////////////////////

router.get("/foundDepartment/:routeName?", (req, res) => {
  console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      name: req.params.routeName,
    },
  }).then((departmentInfo) => {
      // res.json(departmentInfo);
      res.render("departmentItem", {
        id: departmentInfo.id,
        name: departmentInfo.name,
       supervisor: departmentInfo.supervisor,
        lead: departmentInfo.lead,
        createdAt: departmentInfo.createdAt,
      });

    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to departmnet resource",
      });
    });
});


  


  module.exports = router;