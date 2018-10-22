const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = '5000';

const users = require('../database/usersModel');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});

app.get('/users', (req, res) => {
    users.getAll().then((users) => {
        res.json(users);
    })
});

app.get('/loadPictures', (req, res) => {
    res.json({
        message: "AP for reloading both images"
    });
});

app.post('/login', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log('Listening on Port: '+PORT);
});