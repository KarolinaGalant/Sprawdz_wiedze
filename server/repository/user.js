var constants = require('../db');
console.log(constants.ConnectToDB);

module.exports.checkUser = (user) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT * FROM users WHERE login=? AND password=? AND role=?', [user.login, user.password, user.role], (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                resolve(rows)
            }

        });

    })

}

module.exports.addUser = (user) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO  users SET ? ', user, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                resolve(rows)
            }
        });
    })
}
module.exports.getUser = (user) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT * FROM users WHERE login=? AND password=? ', [user.login, user.password], (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                resolve(rows)
            }

        });

    })

}
module.exports.changepassword = (user, iduser) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('UPDATE users SET password=? WHERE iduser='+ iduser, [user.password] , (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                resolve(rows)
            }

        });

    })

}