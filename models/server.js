// Servidor de Express
const express  = require('express')
const http     = require('http')
const socketio = require('socket.io')
const path     = require('path')

class Server {

    constructor() {
        this.app = express()
        this.port = 8080

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