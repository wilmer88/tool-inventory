const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/allItem", (req, res) => {
  db.Item.findAll()
    .then((allItems) => {
      // console.log(allItems);
      res.render("allItems", { allItems: allItems });
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

router.get("/item/new", (req, res) => {
  res.render("addItems");
});

router.get("/item/:id", function (req, res) {
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
      id: oneFoundItem.id,
    });
  });
});

router.get("/item/:id/edit", (req, res) => {
  db.Item.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundO) => {
    console.log(foundO);
    res.render("editItem", {
      id: foundO.id,
      name: foundO.name,
      placement: foundO.placement,
      serial: foundO.serial,
      count: foundO.count,
    });
  });
});

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
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to create item",
      });
    });
});

router.put("/api/item/:id", (req, res) => {
  db.Item.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedItem) => {
      console.log(updatedItem);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "faild to update item",
      });
    });
});

module.exports = router;
