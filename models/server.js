// Servidor de Express
const express  = require('express')
const http     = require('http')
const socketio = require('socket.io')
const path     = require('path')
const Sockets = require('./sockets')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // http server
        this.server = http.createServer( this.app )

        // Configuracion de sockets
        this.io = socketio( this.server, { /* configs */} ) 
    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) )
    }

    configurarsockets() {
        new Sockets( this.io )
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares()

        // Iniciaalizar Sockets
        this.configurarsockets()

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port)
        })
    }

}

module.exports = Server