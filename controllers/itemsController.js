//CREATE controlers
const express = require("express");
const item = require("../models/item");
const router = express.Router();

//Sequelized
const ItemModel = require("../models").Item;
const UserModel = require("../models").User;


//Sequelized - INDEX route
router.get("/", (req, res) => {
  ItemModel.findAll().then((itemsAllFromDb) => {
    res.render("items/index.ejs", {item: itemsAllFromDb});
  })
});

//Sequelized - CREATE NEW via POST ROUTE --> controllers
router.post("/", (req, res)=>{
  ItemModel.create(req.body).then((newUser) => {
    res.redirect("/items");
  });
});

//UPDATE function needs both EDIT & PUT routes
//Sequelized -  UPDATE -- > //EDIT route
router.get('/:id/edit', function(req, res){
	ItemModel.findByPk(req.params.id).then((itemToEdit) => {
    res.render('items/edit.ejs', {
      item: itemToEdit,
    });
  });
});
//Sequelized - UPDATE - //PUT route
router.put('/:id', (req, res) => {
  ItemModel.update(req.body, 
    {where: {id: req.params.id}, returning: true,}).then((itemUpdated) => {
    res.redirect("/items"); //redirect to the index page
  });
});

//NEW ROUTE - SEND EMPTY FORM
//put this above your show.ejs file
//Sequelized - no changes needed
router.get('/new', (req, res) => {
    res.render('items/new.ejs');
  });
  
//Sequelized -  SHOW ROUTE with join
router.get('/:id', (req, res) => {
    ItemModel.findByPk(req.params.id, {
        include : [UserModel],
    })
    .then((item) => {
        console.log(item);
        res.render("items/show.ejs", {
            item: item
        });
    })
});


//Sequelized -  DELETE  (note Sequelized method is '.destroy')
router.delete('/:id', (req, res) => {
  ItemModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/items");
  });
});

module.exports = router;