var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");


router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    console.log(req.body.name);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
      devoured: req.body.devoured
  }, condition, function() {
      res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
