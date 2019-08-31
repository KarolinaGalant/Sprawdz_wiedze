const mysql = require('mysql');

// Create connection 
 const ConnectToDB = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'users',
});

module.exports = Object.freeze({
    ConnectToDB    
});
