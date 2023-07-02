const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const rootDir = require('./util/path');
const shopRoutes = require('./routes/shop');
const sequelize = require('./util/database');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));


app.use(shopRoutes);

app.get('/',(req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
})

sequelize
.sync()
.then(result => {
    app.listen(3000,() => {
        console.log('Server listening on port 3000');
    })
})
.catch(err => {
    console.log(err);
})