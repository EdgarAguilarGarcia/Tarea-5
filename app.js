var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  app.use(express.static('public'));
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

//Static files


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