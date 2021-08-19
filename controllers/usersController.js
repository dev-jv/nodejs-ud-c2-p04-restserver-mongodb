const { response, request } = require('express');

const getUsers = (req, res) => {
    // res.send('unsynchronized');

    // const query = req.query;

    const { name='undefined' } = req.query;

    res.json({
        msg: 'get API - cont',
        // query
        name
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

    // const id = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'delete API',
        id
    })
};

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
};
