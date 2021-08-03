<<<<<<< HEAD
var http = require('http');

var port = 8080;
http.createServer(function (req, res) {
	console.log("Aplikasi berjalan pada port : "+port);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
=======
var http = require('http');

var port = 8080;
http.createServer(function (req, res) {
	console.log("Aplikasi berjalan pada port : "+port);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
>>>>>>> 1f3be454b581264b7ccc1efcae4b577e2ccb9fa3
}).listen(port);