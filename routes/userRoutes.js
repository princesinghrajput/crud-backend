const express = require('express');
const router = express.Router();
const {createUser, getAllUser, getUserById, updateUser, deleteUser} = require('../controller/userController')
const authMiddleware = require("../middleware/authMiddleware");
router.post('/create',authMiddleware, createUser);
router.get('/getUsers', authMiddleware, getAllUser);
router.get('/getUser/:id', getUserById);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;