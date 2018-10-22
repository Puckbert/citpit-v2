const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Joi = require('joi');

const app = express();
const PORT = '5000';
const middlewares = require('./auth/middlewares');
// const auth = require('./auth/index.js');
// const auth = require('./auth/index');
const auth = require('./auth');
const notes = require('./api/notes');

const users = require('../database/usersModel');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(middlewares.checkTokenSetUser);
app.use('/auth', auth);
app.use('/api/v1/notes', middlewares.isLoggedIn, notes);

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
        message: "API for reloading both images"
    });
});

app.post('/signup', (req, res, next) => {
    const result = Joi.validate(req.body, schema);

    if (result.error === null){
        users.find({
            email: req.body.email
        }).then(user => {
            res.json({ user });
        })
    } else {
        next(result.error);
    }
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

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
    console.log('Listening on Port: '+PORT);
});