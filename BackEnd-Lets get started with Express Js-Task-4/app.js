const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/message', (req, res) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) {
            data = 'No chats exists';
        }
        res.send(
            `${data}<form method="POST" action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" >
        <input type="text" name="message" id="message" placeholder="Message">
        <input type="hidden" name="username" id="username">
        <br/>
        <button type="submit">Send</button></form>`);
    })
});

app.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFileSync('message.txt', `${req.body.username}:${req.body.message}`, { flag: "a" }, (err) => {
        err ? console.log(err) : res.redirect('/message');
    });
    res.redirect('/message');
});

app.get('/login', (req, res) => {
    res.send(`<form action="/message" onSubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST">
    <input id='username' type="text" name="username"/>
    <button type="submit">LOG IN</button>
    </form>`);
});


app.use((req, res) => {
    res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(3000);

