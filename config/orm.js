// mySQL framework for CRUD functions (Model)

// Import connection from connection.js.
var connection = require('./connection.js');

// ORM object to handle SQL structured queries to database.
var orm = {

	all: function(table, cols, callback) {
		// Build query string.
		let queryString = 'SELECT ';
		queryString += cols.toString() + ' FROM ' + table + ';'
		// Send query to database.
		connection.query(queryString, function(err, data) {
			if (err) {
				errorMessage();
			} else {
				callback(data);
			}
		});	
	},
	create: function(table, cols, vals, callback) {
		// Iterate through user supplied values to escape SQL injection.
		let values = '';
		for (let i = 0; i < vals.length; i++) {
			// Escape characters for SQL injection.
			let cleanVal = connection.escape(vals[i]);
			values += cleanVal + ',';
		}
		// Remove trailing , from end of string.
		let trimmedValues = values.substring(0, values.length - 1);

		// Build query string.
		let queryString = 'INSERT INTO ' + table + ' ';
		queryString += '(' + cols.toString() + ')';
		queryString += ' VALUES (' + trimmedValues + ')';
		// Send query to database.
		connection.query(queryString, function(err, data) {
			if (err) {
				errorMessage();
			} else {
				callback(data);
			}
		});
	},
	update: function(table, conditionCol, condition, newValueCol, newValue, callback) {
		// Build query string.
		let queryString = 'UPDATE ' + table + ' ';
		queryString += 'SET ' + newValueCol + ' = ' + newValue + ' ';
		queryString += 'WHERE ' + conditionCol + ' = ' + condition + ';';
		// Send query to database.
		connection.query(queryString, function(err, data) {
			if (err) {
				errorMessage();
			} else {
				callback(data);
			}
		});
	}
};

var errorMessage = () => console.log('Sorry, there was a database connection error.');


// Export ORM for use in model file logic (burger.js)
module.exports = orm;