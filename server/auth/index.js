const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/connection');
const users = db.get('users');

const router = express.Router();

/*
* Email
* Passwort
* PLZ
* Schule
* imageURL
* evtl. Freunde
* evtl. Chat
*/
const schemaSignup = Joi.object().keys({
    email: Joi.string().email().required(),
    passwort: Joi.string().required(),
    plz: Joi.string().max(5).regex(/^[0-9]+$/).required(),
    schule: Joi.string().required(),
    imageURL: Joi.string().uri().required(),
    bewertung: Joi.number().default(10).required()
});

const schemaLogin = Joi.object().keys({
    email: Joi.string().email().required(),
    passwort: Joi.string().required()
});

function createTokenSendResponse(user, res, next) {
   const payload = {
     _id: user._id,
     email: user.email
   };
 
   jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: '1d'
   }, (err, token) => {
     if (err) {
        console.log("4. ");
       respondError422(res, next);
     } else {
        user.token = token,
       res.json({
         user
       });
     }
   });
}

///auth/signup
// req.body muss exakt alles beinhalten, was in die DB eingefügt wird
router.post('/signup', (req, res, next) => {
    const result = Joi.validate(req.body, schemaSignup);
    
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
                        passwort: hashedPasswort,
                        plz: req.body.plz,
                        schule: req.body.schule,
                        imageURL: req.body.imageURL,
                        bewertung: req.body.bewertung
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
    const result = Joi.validate(req.body, schemaLogin);
    console.log(req.body);
    
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
                        console.log("1. ");
                        respondError422(res, next);   
                    }
                });
            } else {
                console.log("2. ");
                respondError422(res, next);
            }
        })
    } else {
        console.log("3. ");
        respondError422(res, next);
    }
});

module.exports = router;