const { getUsers, putUsers, postUsers, deleteUsers } = require('../controllers/usersController');

const { Router } = require('express');

const router = Router();

router.get('/test', getUsers);

router.put('/test', putUsers);

router.post('/test', postUsers);

router.delete('/test', deleteUsers);

module.exports = router;
