const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'Fzopp@8997e'
});

module.exports=pool.promise();