// Require MySQL package for connecting to database.
const mysql = require('mysql');
const key = require('../setup/keys.js');

// Connection parameters for MySQL.
var connection = mysql.createConnection({
	host: 'localhost',
	port: key.keys.port,
	user: key.keys.user,
	pass: key.keys.pass,
	database: 'burgers_db'
});

// Establish connection to MySQL.  If error, console.log error.
connection.connect(function(err){
	if (err) {
    	console.error('error connecting: ' + err.stack);
    	return;
	}
	console.log('connected as id ' + connection.threadId);
});


// Export connection for use in orm.js.
module.exports = connection;