const monk = require('monk');
const connectionURL = 'localhost/users';
const db = monk(connectionURL);

module.exports = db;
