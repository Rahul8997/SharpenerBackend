
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;

    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log("data" + data);
            res.write('<html>')
            res.write('<head><title>Enter message</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end();
        })
    }
    if (url === '/message' && req.method == "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            // console.log(chunk);
        })

        req.on('end', () => {
            const parseData = Buffer.concat(body).toString();
            const message = parseData.split('=')[1];
            fs.writeFileSync("message.txt", message);
            res.statusCode = "302";
            res.setHeader("Location", '/')
            return res.end();
        })
    }
}

// Syntax type 1 export
// module.exports=requestHandler;

//Syntax type 2 export
// module.exports = {
//     requestHandler: requestHandler,
//     someText: "I am some text"
// }

// Syntax type 3 export
module.exports.requestHandler=requestHandler;
module.exports.someText="I am some text";
