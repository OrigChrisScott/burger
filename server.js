// Node Server
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const opn = require('opn');

const port = 3000;
const server = express();

// Enable public folder to server static content to user.
server.use(express.static('./public'));
// Enable body-parser to extract req.body.
server.use(bodyParser.urlencoded({ extended: false }));
// Override for PUT and DELETE requests to use POST method.
server.use(methodOverride('_method'));

// Set Handlebars.
const exphbs = require('express-handlebars');
server.engine('handlebars', exphbs({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var router = require('./controllers/burger_controller.js');

server.use('/', router);

// Listen on port
server.listen(port, function() {
	console.log('Server listening on port: ' + port);
	opn('http://localhost:3000');
});