const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/connection');
const users = db.get('users');

const router = express.Router();

const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    passwort: Joi.string().required()
});

function createTokenSendResponse(user, res, next) {
    const payload = {
      _id: user._id,
      username: user.username
    };
  
    jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    }, (err, token) => {
      if (err) {
        respondError422(res, next);
      } else {
        res.json({
          token
        });
      }
    });
  }

///auth/signup
router.post('/signup', (req, res, next) => {
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

function respondError422(res, next) {
    res.status(422);
    const error = new Error('Unable to login.');
    next(error);
  }

router.post('/login', (req, res, next) => {
    const result = Joi.validate(req.body, schema);

    if(result.error === null){
        users.findOne({
            email: req.body.email,
        }).then(user => {
            if(user){
                bcrypt
                .compare(req.body.passwort, user.passwort)
                .then((result) => {
                    if(result){
                        createTokenSendResponse(user, res, next)
                    } else {
                        respondError422(res, next);
                    }
                });
            } else {
                respondError422(res, next);
            }
        })
    } else {
        respondError422(res, next);
    }
});

module.exports = router;