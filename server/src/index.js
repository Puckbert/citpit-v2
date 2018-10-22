const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = '5000';

const db = require('../database/connection');
const users = db.get('users');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    passwort: Joi.string().required()
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});

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

app.post('/signup', (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    
    if (result.error === null){
        users.findOne({
            email: req.body.email
        }).then(user => {
            if(user){
                //Error Message es existiert bereits ein Nutzer
                const error = new Error("Diese Email-Adress existiert bereits");
                next(error);
            } else {
                bcrypt.hash(req.body.passwort.trim(), 12).then(hashedPasswort => {
                    
                    const newUser = {
                        email: req.body.email,
                        passwort: hashedPasswort
                    };

                    users.insert(newUser).then(insertedUser => {
                        res.json(insertedUser);
                    })
                });
            }
        });
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