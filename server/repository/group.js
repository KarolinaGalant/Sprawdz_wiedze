var constants = require('../db');
console.log(constants.ConnectToDB);

module.exports.addGroup = (group, iduser) => {
    return new Promise((resolve, reject) => {
        let a = {
            nameS: group.nameS,
            description: group.description,
            iduser: group.iduser,
        }
        constants.ConnectToDB.query('INSERT INTO subject SET ?', a, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}

module.exports.addUserToGroup = (userToGroup) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO record SET ? ', userToGroup, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}

module.exports.classesList = (classesList, iduser) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT s.idsubject, s.nameS, s.description, s.iduser FROM subject as s  WHERE s.iduser= '+(iduser), classesList, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}
module.exports.allclasseslist = (allclasseslist) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idsubject, nameS, description FROM subject ', allclasseslist, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}
module.exports.getSubject = (getSubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT nameS FROM subject ', getSubject.subject, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}
module.exports.getSubjectStudent = (getSubjectStudent, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT u.name, u.surname FROM users as u INNER JOIN record as r ON r.iduser=u.iduser INNER JOIN subject as s ON s.idsubject=r.idSubject WHERE s.idsubject='+ (idsubject), getSubjectStudent, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}
module.exports.getMyClass = (getMyClass) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT s.nameS FROM subject as s INNER JOIN record as r ON s.idsubject=r.idSubject INNER JOIN users as u ON r.iduser=u.iduser  WHERE u.login=?', getMyClass.login, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            else {
                console.log('succesed');
                console.log(rows);
                resolve(rows)
            }

        });
    })
}
// module.exports.getMyClass = (getMyClass) => {
//     return new Promise((resolve, reject) => {
//         constants.ConnectToDB.query('SELECT u.name, u.surname, u.login FROM users as u INNER JOIN record as r ON r.iduser=u.iduser INNER JOIN subject as s ON s.idsubject=r.idSubject WHERE u.login=?', getMyClass.login, (err, rows, fields) => {
//             if (err) {
//                 throw err;
//             }
//             else {
//                 console.log('succesed');
//                 console.log(rows);
//                 resolve(rows)
//             }

//         });
//     })
// }