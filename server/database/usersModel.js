const db = require('./connection');
const users = db.get('users');

function getAll() {
    return users.find();    
};

function login(_email, _passwort) {
    users.insert({ email: _email, passwort: _passwort });
};

module.exports = {
    getAll,
    login
};