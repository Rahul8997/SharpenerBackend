const http=require('http');
const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("In middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("In another middleware")
})

// const server=http.createServer(app);
// server.listen(3000);

app.listen(3000);
