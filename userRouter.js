const express = require('express');
const userController=require('./userController');
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:userId', userController.getUserbyId);
router.put('/userId',userController.updateUser);
router.delete('/:userId',userController.deleteUser);



module.exports = router;