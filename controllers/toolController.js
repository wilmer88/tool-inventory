const express = require("express");
const router = express.Router();
const db = require("../models");
router.post("/api/item", (req, res) => {
  db.Item
    .create(req.body)
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
        
      })
    });
});

router.get("/allItems", (req, res) => {
  db.Item
    .findAll()
    .then((allItems) => {
      console.log(allItems);
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
router.get("/allItems", function (req, res) {
  res.render("allItems");
});
router.get("/item/add", function (req, res) {
  res.render("addItems");
});
router.get("/item/:id", function (req, res) {
  res.render("findItem");
});
router.get("/item/:id/edit", function (req, res) {
  res.render("editItem");
});
// api routes

module.exports = router;
