const express = require("express");
const router = express.Router();
const db = require("../models");

/////////////////////////////// Get Route To All Department Rows/ Resources ////////////////////////////////////////////////////

router.get("/", (req, res) => {
  db.Department.findAll()
    .then((departments) => {
      // res.json(departments)
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

///////////////////////////////  Create Department Page Get Route   ////////////////////////////////////////////////////

router.get("/addDepartmentCrew/new", (req, res) => {
  res.render("addDepartmentCrew");
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
router.get("/departmentArrayItems/:routeName?", (req, res) => {
  // console.log(req.params.routeName);
  db.Department.findOne({
    where: {
      name: req.params.routeName,
    },

    include: db.Item,
  })
    .then((itemsByDepartment) => {
      // console.log(itemsByDepartment);

      res.render("departmentArrayItems", {
        departmentItems: itemsByDepartment.Items,
        departmentName: itemsByDepartment,
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

router.get("/departmentView/:routeName?", (req, res) => {
  // console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      name: req.params.routeName,
    },
  })
    .then((departmentInfo) => {
      // res.json(departmentInfo);
      res.render("departmentView", {
        id: departmentInfo.id,
        name: departmentInfo.name,
        supervisor: departmentInfo.supervisor,
        lead: departmentInfo.lead,
        createdAt: departmentInfo.createdAt,
        routeName: departmentInfo.routeName,
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

router.get("/departmentEditPage/:routeName?", (req, res) => {
  // console.log(req.params.routeName)
  db.Department.findOne({
    where: {
      routeName: req.params.routeName,
    },
  })
    .then((departmentInfo) => {
      // res.json(departmentInfo);
      res.render("departmentEditPage", {
        id: departmentInfo.id,
        name: departmentInfo.name,
        supervisor: departmentInfo.supervisor,
        lead: departmentInfo.lead,
        createdAt: departmentInfo.createdAt,
        routeName: departmentInfo.routeName,
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

router.put("/api/departmentEdit/:routeName?", (req, res) => {
  db.Department.update(req.body, {
    where: {
      routeName: req.params.routeName,
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

router.delete("/api/deleteDepartment/:routeName?", (req, res) => {
  db.Department.destroy({
    where: { routeName: req.params.routeName },
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
