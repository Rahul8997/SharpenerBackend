const http = require('http');
const requestHandler=require('./routes')

const server = http.createServer(requestHandler.requestHandler)
console.log(requestHandler.someText);

server.listen(4000);

