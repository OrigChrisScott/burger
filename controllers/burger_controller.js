// Router file to route server connections

// Require express module for router creation.
var express = require("express");
var router = express.Router();

// Require burger model.
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
  burger.all(['id', 'burger_name', 'devoured'], function(data) {
    // Set object for handlebars to render.
    var hbsObject = {
      burgers: data
    };
    // Render object in handlebars.
    res.render('index', hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create(['burger_name'], [req.body.burger_name], function() {
    // Reload home page.
    res.send({redirect: "/"});
  });
});

router.put("/:id", function(req, res) {
	burger.update('id', req.params.id, 'devoured', req.body.devoured, function() {
		// Reload home page.
		res.redirect('/');
	});
});


// Export routes for server.js to use.
module.exports = router;