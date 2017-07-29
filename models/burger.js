// Accepts ORM object, calls ORM functions to manipulate mySQL data

// Import orm object from orm.js.
var orm = require('../config/orm.js');

// Burger object to handle logic for CRUD operations.
var burger = {

	all: function(cols, callback) {
		orm.all('burgers', cols, function(data) {
			callback(data);
		});
	},
	create: function(cols, vals, callback) {
		orm.create('burgers', cols, vals, function(data) {
			callback(data);
		});
	},
	update: function(conditionCol, condition, newValueCol, newValue, callback) {
		orm.update('burgers', conditionCol, condition, newValueCol, newValue, function(data) {
			callback(data);
		});
	}
};


// Export burger for use in controller file burger_controller.js.
module.exports = burger;