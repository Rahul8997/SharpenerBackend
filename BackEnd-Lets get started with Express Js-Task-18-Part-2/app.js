const path = require('path');
const cors=require('cors')
const express = require('express');
const bodyParser = require('body-parser');

// const userController = require('./controllers/error');
const sequelize=require('./util/database');

const app = express();

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
// app.user(cors());
app.use(cors());
app.use((req,res)=>{
res.send("Error:Something went wrong");
});

sequelize.sync()
.then(() => app.listen(3000))
.catch(err => console.log(err));
