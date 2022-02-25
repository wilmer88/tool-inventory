const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/allItem", (req, res) => {
  db.Item.findAll()
    .then((allItems) => {
      // console.log(allItems);

      res.render("allItems", { allItems });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to retrive items",
      });
    });
});

router.get("/item/add", function (req, res) {
  res.render("addItems");
});
router.get("/view/:id", function (req, res) {
  db.Item.findOne({
    where: {
      id: req.params.id,
    },
  }).then((oneFoundItem) => {
    res.render("foundItem", {
      name: oneFoundItem.name,
      placement: oneFoundItem.placement,
      serial: oneFoundItem.serial,
      count: oneFoundItem.count,
    });
  });
});
// router.get("/item/:id", function (req, res) {
// db.Item.
// });
router.get("/item/:id/edit", function (req, res) {
  db.Item.findOne({
    where: {
      id: req.params.id,
    },
  }).then((EditoneFoundItem) => {
    console.log(EditoneFoundItem);
    res.render("editItem", {
      name: EditoneFoundItem.name,
      placement: EditoneFoundItem.placement,
      serial: EditoneFoundItem.serial,
      count: EditoneFoundItem.count,
    });
  });
});
// api routes
router.post("/api/item", (req, res) => {
  db.Item.create(req.body)
    .then((newItem) => {
      res.json({
        error: false,
        data: newItem,
        message: "successfully created new item",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({});
    });
});

router.put("api/item/:id", (req, res) => {
  db.Item.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedItem) => {
    console.log(updatedItem);
    res.end();
  });
});

module.exports = router;
