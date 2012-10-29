var express = require('express'); 
var app = express.createServer(); 
var socket = require('socket.io'); 

//__dirname --> current directory. 
app.configure(function() {
	app.use(express.static(__dirname + '/'))
});


//start server
var server = app.listen(3001); 
var io = socket.listen(server);  //starts socket.io


io.sockets.on('connection', function(socket){
	console.log('client connected');

	socket.on('ping', function(data){
		console.log(data.txt);

		socket.emit('pong', {txt: "Pong from server"});
	});

});
