var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(port_number);

io.on('connection', function(socket){
    console.log('creada la coneccion de socket', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('escribiendo', function(data){
        socket.broadcast.emit('escribiendo', data)
    });
});