var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
    res.render('index');
});

// 클라이언트에서 connect에 성공 시 호출됩니다.
io.on('connection', function(socket){
	console.log('client connected');
	
	socket.on('message', function(obj){
        // 클라이언트에서 'message'라는 이름의 event를 받았을 경우에 호출됩니다. 
		console.log(obj);
	});
	
	socket.on('disconnect', function(){
    	// 클라이언트의 연결이 끊어졌을 때 호출됩니다.
		console.log('server disconnected');
	});
});

// 소켓 통신을위해 포트를 지정합니다. 
var PORT = 3000;
http.listen(PORT, function(){
	console.log('listening port: 3000');
});