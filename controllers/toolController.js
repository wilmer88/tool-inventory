const express = require("express");
const router = express.Router();
const db = require("../models");

//////////// Gets addItem View Page and querys Department table to display on dropdown options///////////////////////////

router.get("/addItemPageAndDepartments", (req, res) => {
  db.Department.findAll()
  .then((departmentsDB) => {
    // res.json(departmentsDB)
    res.render("addItemPage", {dropDownOptions: departmentsDB});
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


////////////Get Route That Gets All Items and renders Page from Views///////////////////////////

router.get("/allItems", (req, res) => {
  db.Item.findAll({ 

    include: db.Department

   })
  .then((allItems) => {
    // console.log(departments);
    // res.json(allItems);
    res.render("allItemsPage", { allItems: allItems, partments: allItems.Department });
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

////////////////// get one item usint the item id/////////////////////////


router.get("/item/:id", function (req, res) {
  db.Item.findOne({
    where: {
      id: req.params.id,
    },

    include: db.Department

  })
    .then((oneFoundItem) => {
      // res.json(oneFoundItem);
      res.render("foundItem", {
        foundItem: oneFoundItem
        // id: oneFoundItem.id,
        // itemName: oneFoundItem.itemName,
        // placement: oneFoundItem.placement,
        // serial: oneFoundItem.serial,
        // count: oneFoundItem.count,
        // countedBy: oneFoundItem.countedBy,
        // Department: oneFoundItem.Department,
        // DepartmentId: oneFoundItem.DepartmentId,
        // createdAt: oneFoundItem.createdAt,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to create resource",
      });
    });
});

router.get("/item/:id/edit", (req, res) => {
  db.Item.findOne({
    where: {

      id: req.params.id,

    },

    include: db.Department

  }).then((foundO) => {
    console.log(foundO);
    res.render("editItem", {
      id: foundO.id,
      itemName: foundO.itemName,
      placement: foundO.placement,
      serial: foundO.serial,
      count: foundO.count,
      countedBy: foundO.countedBy,
      DepartmentName: foundO.DepartmentName
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: true,
      data: null,
      message: "unable to edit resource",
    });
  });
  
});
////////////////search by routename= name of item////////////////

router.get("/api/item/:routeName?", (req, res) => {
  // console.log(req.params.routeName);
  db.Item.findOne({
    where: {
      routeName: req.params.routeName,
    },

    include: db.Department

  })
    .then((serchedItem) => {
      // res.json(serchedItem);
      res.render("itemSearch", {
        id: serchedItem.id,
        itemName: serchedItem.itemName,
        placement: serchedItem.placement,
        serial: serchedItem.serial,
        count: serchedItem.count,
        countedBy: serchedItem.countedBy,
        DepartmentName: serchedItem.DepartmentName,
        createdAt: serchedItem.createdAt,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to find searched resource",
      });
    });
});


//////////////// create new resource/ item //////////////////

router.post("/api/postItem", (req, res) => {
  console.log(req.body);

  db.Item.create(req.body)
    .then((newItem) => {
      res.json({
        error: false,
        data: newItem,
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

///////////////edit resource///////////////////

router.put("/api/item/:id", (req, res) => {
  db.Item.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedItem) => {
      // console.log(updatedItem);
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

router.delete("/api/thing/:id", (req, res) => {
  db.Item.destroy({
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