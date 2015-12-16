var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
	console.log("reaaching to create server");
	fs.readFile(__dirname+ '/index.html',function(err,data){
		// if(err) console.error(err);
		// else console.log("No error recorded");
		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.end(data,'utf-8');
	});
}).listen(3000,"127.0.0.1");

console.log("Server running at http://127.0.0.1:3000");

var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
	console.log("User connected");

socket.on('disconnect',function(){
	console.log("User disconnedted");
});
});