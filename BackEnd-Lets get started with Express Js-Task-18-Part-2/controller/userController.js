const path = require('path');
const User=require('../model/user')

module.exports.getAddUser = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
}

module.exports.getUsers=(req, res, next) => {
    User.findAll()
    .then((users)=>{
    console.log(users);
    })
    .catch(err=>console.log(err));
}

module.exports.postAddUser = (req, res, next) => {
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;

    // console.log("object")
    console.log(req.body)
    // res.redirect('/')
    User.create({
        name:name,
        email:email,
        phone:phone
    })
    res.redirect('/');
}