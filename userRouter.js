const express = require('express');
const userController=require('./userController');
const router = express.Router();

router.get('/users', userController.getAllUser);
router.get('/users/:userId', userController.getUserbyId);
router.put('/users/:userId',userController.updateUser);
router.delete('/users/:userId',userController.deleteUser);
router.post('users/createUser/',userController.createUser)


module.exports = router;