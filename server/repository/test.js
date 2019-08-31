var constants = require('../db');
console.log(constants.ConnectToDB);

module.exports.addTest = (test) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO closetests SET ? ', test, (err, rows, fields) => {
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
module.exports.getTest = (test) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT question, answerA, answerB, answerC, answerD, correctAnswer FROM closetests WHERE idTest=1 ', test, (err, rows, fields) => {
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
module.exports.getDoneTest = (test) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idQuestion, question, answerA, answerB, answerC, answerD FROM closetests WHERE idTest=1 ', test, (err, rows, fields) => {
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
module.exports.getRating = (rating) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT  s.nameS, r.rating FROM subject as s INNER JOIN subjecttest as st ON  s.idsubject = st.idsubject INNER JOIN rating as r ON st.idTest = r.idTest WHERE r.iduser=6', rating, (err, rows, fields) => {
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
module.exports.getTestList = (testList) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT s.nameS, st.idTest FROM subject as s INNER JOIN subjecttest as st ON s.idsubject = st.idsubject ', testList, (err, rows, fields) => {
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
module.exports.getTestName = (testName) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT testName FROM testname WHERE idTest = 1 ', testName, (err, rows, fields) => {
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
module.exports.addTestName = (testName) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO testName SET ?  ', testName, (err, rows, fields) => {
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
module.exports.addAnswer = (answer) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO answers SET ?  ', answer, (err, rows, fields) => {
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





// module.exports.addUserToGroup = (userToGroup) => {
//     constants.ConnectToDB.query('INSERT INTO record SET ? ', userToGroup , (err, rows, fields) => {
//         if (err) {
//             throw err;
//         }
//         else {
//             console.log('succesed');
//             console.log(rows);
//         }

//     });
// }

module.exports.addAttachment = (attachment) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO closetests SET ? ', test, (err, rows, fields) => {
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

