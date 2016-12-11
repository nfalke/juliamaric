// Use "nodemon" to start server

var express = require('express'),
	handlebars = require('express-handlebars');

var app = express();

// Hide from http header
app.disable('x-powered-by');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// Home route
app.get('/', function (request, response) {
	response.render('home', {
		title: 'hepp'
	});
});

// 404 route
app.use(function (request, response) {
	response.type('text/html');
	response.status(404);
	response.render('404');
});

// 500 route
app.use(function (error, request, response) {
	console.log(error(error.stack));
	response.status(500);
	response.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on port ' + app.get('port'));
});