const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use( express.static( __dirname + '/public' ) );

io.on('connection', ( socket ) => {
    
    socket.emit('mensaje-bienvinida', {
        msg: 'Mensaje del server',
        fecha: new Date() 
    })

    socket.on('mensaje-cliente', (data) => {
        console.log(data);
    })
    
});

server.listen(8080, () => {
    console.log('Server corriendo en el puerto: 8080');
});