var app = require('../src/App');
var http = require('http');

var port = 5000;
const hostname = 'localhost';

var server = http.createServer(app);

server.listen(port, hostname);