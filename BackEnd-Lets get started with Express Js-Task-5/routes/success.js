const express=require('express');
const router=express.Router();

router.post('/', (req, res) => {
    res.send('<h1>Form successfully filled</h1>');
 });

module.exports=router;