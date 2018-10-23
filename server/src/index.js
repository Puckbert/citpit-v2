const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = '5000';

const db = require('../database/connection');
const users = db.get('users');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});


const auth = require('../auth');

app.use('/auth', auth);
// app.get('/drop', (req, res) => {
//     users.dropIndexes();
//     res.json({
//         message: "Success"
//     });
// });

app.get('/users', (req, res) => {
    users.find().then(users => {
        res.json(users);
    })
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
  }
  
function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.get('/randomImage', (req, res) => {
    users.aggregate([{$project: {imageURL:1, _id:0}},{ $sample: {size:1}}]).then(resp => {
        res.json(resp);
    });
});

// app.get('/removeAllUsers', (req, res) => {
//     users.remove().then(erg => {
//         res.json(erg);
//     });
// });

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
    console.log('Listening on Port: '+PORT);
});