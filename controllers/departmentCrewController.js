const express = require("express");
const router = express.Router();
const db = require("../models");

/////////////////////////////// Gets Route To All Department Rows/ Resources /////////////////////////////////////////////

router.get("/", (req, res) => {
  // db.Department.findAll({include: "items"})
  db.Department.findAll({include: db.Item})
    .then((departments) => {
      // res.json(departments);
      res.render("index", { allDepartments: departments });
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

router.get("/allDepartments", (req, res) => {
  // db.Department.findAll({include: "items"})
  db.Department.findAll()
    .then((departments) => {
      // res.json(departments);
      res.render("allDepartments", { allDepartments: departments });
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

///////////////////////////////  Create Department Page Get Route   ////////////////////////////////////////////////////

router.get("/addDepartmentPage/new", (req, res) => {
  res.render("addDepartmentPage");

});

/////////////////////////////// POST Route To Create new department////////////////////////////////////////////////////

router.post("/api/departmentPost", (req, res) => {
  // console.log(req.body);
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

// /////////////////////////////Gets Department Array of Items////////////////////////////////////////////////////
router.get("/departmentArrayItems/:id", (req, res) => {
  // console.log(req.params.routeName);
  db.Department.findOne({
    where: {
      id: req.params.id,
    },

    include: db.Item,
  })
    .then((itemsByDepartment) => {
      // console.log(itemsByDepartment);
      res.render("departmentArrayItems", {  
        departmentObj: itemsByDepartment,
        // departmentItems: itemsByDepartment.Items,
      });
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

// /////////////////////////////Route to view department////////////////////////////////////////////////////

router.get("/departmentView/:id", (req, res) => {
  // console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      id: req.params.id,
    },
    include: db.Item
  })
    .then((departmentInfo) => {
      // res.json(departmentInfo);
      res.render("departmentView", {
        departmentView: departmentInfo,
        // departmentName: departmentInfo.departmentName,
        // supervisor: departmentInfo.supervisor,
        // lead: departmentInfo.lead,
        // createdAt: departmentInfo.createdAt,
        // routeName: departmentInfo.routeName,
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

///////////////////////////////Route to view Department Edit Page////////////////////////////////////////////////////

router.get("/departmentEditPage/:id", (req, res) => {
  // console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((departmentInfo) => {
      // res.json(departmentInfo);
      res.render("departmentEditPage", {
        departmentToEditInfo: departmentInfo
        // id: departmentInfo.id,
        // departmentName: departmentInfo.departmentName,
        // supervisor: departmentInfo.supervisor,
        // lead: departmentInfo.lead,
        // createdAt: departmentInfo.createdAt,
        // routeName: departmentInfo.routeName,
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

/////////////////////////////// PUT Route to Edit Deparment Resource ////////////////////////////////////////////////////

router.put("/api/departmentEdit/:id", (req, res) => {
  db.Department.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedDepartment) => {
      // console.log(updatedDepartment);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Faild to update item.",
      });
    });
});

router.delete("/api/deleteDepartment/:id", (req, res) => {
  db.Department.destroy({
    where: { id: req.params.id },
  }).then((result) => {
    res.end();
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      error: true,
      data: null,
      message: "Faild to delete resource.",
    });
  });
});

module.exports = router;
