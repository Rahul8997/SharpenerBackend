const express = require('express');
const bodyParser=require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name ="title" placeholder = "Title of product" ><input type="text" name="size" id="" placeholder="Size of product"><button type="submit">Add product</button></form>');
})
app.use('/product', (req, res) => {
   console.log(req.body);
   res.redirect('/');
})
app.use('/', (req, res) => {
    res.send('<h1>Hello from express</h1>');
})

app.listen(3000);
