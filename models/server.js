const express = require('express');
const cors = require('cors');
const colors = require('colors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        this.middlewares();

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );
        //... body
        this.app.use( express.json() );
        //Public directory
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use( this.userPath, require('../routes/user') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at ${this.port.blue} port`)
        });
    }
}

module.exports = Server;
