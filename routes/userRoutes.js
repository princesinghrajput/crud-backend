const express = require('express');
const router = express.Router();
const {createUser, getAllUser, getUserById, updateUser, deleteUser} = require('../controller/userController')

router.post('/create', createUser);
router.get('/getUsers', getAllUser);
router.get('/getUser/:id', getUserById);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;