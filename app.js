const colors = require('colors');
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('look at me')
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT.blue} port`)
});
