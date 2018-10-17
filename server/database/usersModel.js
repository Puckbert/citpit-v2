const db = require('/connection');

const users = db.get('users');

function getAll() {
    return users.find();
};

module.exports = {
    getAll
};