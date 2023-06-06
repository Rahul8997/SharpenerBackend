const express=require('express');
const router=express.Router();
const successController=require('../controllers/successController');
router.post('/',successController.sucessControllerHandler);

module.exports=router;