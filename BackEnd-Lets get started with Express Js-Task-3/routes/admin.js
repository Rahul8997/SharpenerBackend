const express=require('express');

const router=express.Router();

router.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name ="title" placeholder = "Title of product" ><input type="text" name="size" id="" placeholder="Size of product"><button type="submit">Add product</button></form>');
});

router.post('/add-product', (req, res) => {
   console.log(req.body);
   res.redirect('/');
});

module.exports=router;




