const Server = require("./models/server")


const server = new Server()

server.execute()



// const app = require('express')();

// const io = require('socket.io')(server);



// io.on('connection', ( socket ) => {
    
//     // socket.emit('mensaje-bienvinida', {
//     //     msg: 'Mensaje del server',
//     //     fecha: new Date() 
//     // })

//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         io.emit('mensaje-from-server', data);
//     })
    
// });

