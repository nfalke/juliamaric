// Use "nodemon" to start server

var express = require('express'),
	handlebars = require('express-handlebars'),
	nodemailer = require('nodemailer');

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
		title: 'Julia Maric',
		query : request.query
	});
});

// Send email
app.get('/sendmail', function (request, response) {
	var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.emailUser,
				pass: process.env.emailPassword
			}
		});

	transporter.sendMail({
		from: request.query.name + '<' + request.query.email + '>',
		to: 'nfalke@gmail.com',
		subject: 'test',
		text: request.query.message
	}, function (error, info) {
		if (error) {
			console.log(error);
			response.redirect('/?email-error=true');
		} else {
			console.log('Message sent');
			response.redirect('/?email-sent=true');
		}
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