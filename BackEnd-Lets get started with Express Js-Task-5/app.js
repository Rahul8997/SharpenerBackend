const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const path=require('path');

app.use(bodyParser.urlencoded({extended:false}));

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contactRouter=require('./routes/contact');
const successRouter=require('./routes/success');

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use('/contact',contactRouter);
app.use('/success',successRouter);

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res)=>{
    // res.status(404).send('<h1>Page not Found</h1>');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});

app.listen(3000);
