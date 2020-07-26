const express = require('express');
const app = express();
const cors = require('cors');

const users = require('./users');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res, next) => { //home url
    res.sendFile(__dirname + "/home.html");
});
app.get('/users', (req, resp) => { //get users json 
    resp.json(users);
});
app.post('/users', (req, resp) => { //create new users object 
    const content = {
        email: req.body.email,
        account: req.body.account,
        password: req.body.password,
        id: users.length
    };
    users.push(content);
    resp.json(users);
});

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));