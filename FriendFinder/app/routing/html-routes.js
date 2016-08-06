// // var express = require('express');
// var path = require('path');
// // var bodyParser = require('body-parser');

// var app = express();
// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// console.log('You\'ve found me');
// // GET initial html page
// app.get('/', function (req, res) {
//   var fullPath = path.join(__dirname, 'home.html');
//   res.sendFile(fullPath);
// });



// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};