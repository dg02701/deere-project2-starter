const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const ItemModel = require("../models").Item;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
    console.log(userProfile);
  });
});
router.get("/profile/:id/items", (req, res) => {
  ItemModel.findAll().then((itemsAllFromDb) => {
    console.log("itemsController.js ln14", itemsAllFromDb);
    res.render("items/index.ejs", {item: itemsAllFromDb, id: req.params.id});
  })
});

// SEQUELIZE'd PUT route to update User's info
router.put("/profile/:id", (req, res) => {
  UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedUser) => {
      console.log(updatedUser);
    res.redirect(`/users/profile/${req.params.id}`); 
  });
});

//SEQUELIZE'd DELETE player route
router.delete("/:id", (req, res) => {
  UserModel.destroy({where: {id: req.params.id}}).then(() =>
  {
    // goto HOMEPAGE
    res.render("users/index.ejs");
  });
});

module.exports = router;
