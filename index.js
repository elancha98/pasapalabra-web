var express = require('express');
var socket = require('socket.io');

// Setup
var app = express();
var server = app.listen(8000, function() {
	console.log("Serving pasapalabra on port 8000.");
});

// Static
app.use(express.static('public'));

// Soket Setup
var io = socket();
io.on('connection', function(socket) {
	console.log('Made soket connection ', socket.id);
});
