var express = require('express');
var socket = require('socket.io');

//App setup
const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('creada la coneccion de socket', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('escribiendo', function(data){
        socket.broadcast.emit('escribiendo', data)
    });
});