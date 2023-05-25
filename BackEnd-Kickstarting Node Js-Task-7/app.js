const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req);
const url=req.url;

if(url=='/home'){
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Welcome to home page</h1>')
    return res.end();
}
if(url=='/about'){
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Welcome to About Us page</h1>')
    return res.end();
}
if(url=='/node'){
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Welcome to my Node Js project</h1>')
    return res.end();
}
})

server.listen(4000);