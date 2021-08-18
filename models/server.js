const express = require('express');
const colors = require('colors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.get('/tx', (req, res) => {
            res.send('unsynchronized');
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at ${this.port.blue} port`)
        });
    }

}

module.exports = Server;
