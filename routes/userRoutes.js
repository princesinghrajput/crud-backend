const express = require('express');
const router = express.Router();
const {createUser, getAllUser, getUserById} = require('../controller/userController')

router.post('/create', createUser);
router.get('/getUsers', getAllUser);
router.get('/getUser/:id', getUserById)

module.exports = router;