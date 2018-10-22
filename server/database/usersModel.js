const db = require('./connection');

const users = db.get('users');

function getAll() {
    return users.find();
};

function login(_email, passwort) {
    users.insert({ email: _email, passwort });
};

module.exports = {
    getAll
};