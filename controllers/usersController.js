const { response } = require('express');

const getUsers = (req, res) => {
    // res.send('unsynchronized');
    res.json({
        msg: 'get API - cont'
    })
};

const putUsers = (req, res) => {
    res.status(500).json({
        msg: 'put API'
    })
};

const postUsers = (req, res) => {

    //const body = req.body;

    const { name, age } = req.body;

    res.status(201).json({
        msg: 'post API',
        // body,
        name,
        age
    })
};

const deleteUsers = (req, res) => {
    res.json({
        msg: 'delete API'
    })
};

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
};
