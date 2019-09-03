var constants = require('../db');
console.log(constants.ConnectToDB);

module.exports.addTest = (test, idTest) => {
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
module.exports.getTest = (test, idTest) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT question, answerA, answerB, answerC, answerD, correctAnswer, open FROM closetests WHERE idTest= '+ (idTest+ ' '), test, (err, rows, fields) => {
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
module.exports.getTestToCheck = (test, idTest, idUserTest) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT c.question, c.answerA, c.answerB, c.answerC, c.answerD, c.correctAnswer, a.answer FROM closetests as c INNER JOIN answers as a ON a.idQuestion=c.idQuestion WHERE a.idTest= '+ (idTest)+' AND a.iduser='+(idUserTest), test, (err, rows, fields) => {
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
module.exports.getDoneTest = (test, idTest) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idQuestion, question, answerA, answerB, answerC, answerD, open FROM closetests WHERE idTest='+(idTest+' '), test, (err, rows, fields) => {
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
module.exports.getRating = (rating, iduser) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT  s.nameS, r.rating, r.points FROM subject as s INNER JOIN subjecttest as st ON  s.idsubject = st.idsubject INNER JOIN rating as r ON st.idTest = r.idTest WHERE r.iduser='+iduser, rating, (err, rows, fields) => {
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
module.exports.getTestRating = (rating, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT  s.nameS, r.rating, t.testName FROM subject as s INNER JOIN testName as t ON s.idsubject = t.idsubject INNER JOIN rating as r ON t.idTest = r.idTest WHERE s.idsubject='+idsubject,  rating, (err, rows, fields) => {
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
module.exports.getTestList = (testList, iduser) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT s.nameS, st.idTest FROM subject as s INNER JOIN subjecttest as st ON s.idsubject = st.idsubject INNER JOIN record as r ON r.idSubject=s.idsubject WHERE r.iduser='+(iduser+' '), testList, (err, rows, fields) => {
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
module.exports.getTestName = (testName, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idTest, testName FROM testname WHERE idsubject='+(idsubject+ ' '), testName, (err, rows, fields) => {
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
module.exports.getTestNameSub = (testName, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idTest, testName FROM testname WHERE idsubject='+(idsubject+ ' '), testName, (err, rows, fields) => {
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

module.exports.getTestNameById = (testName, testId) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT tn.idTest, tn.testName  FROM testname as tn  WHERE tn.idTest='+testId, testName, (err, rows, fields) => {
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

module.exports.getTestNameBySubject = (testName, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT idTest, testName FROM testname WHERE idsubject='+idsubject, testName, (err, rows, fields) => {
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

module.exports.addTestName = (testName,idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO testName SET ?  ', testName , (err, rows, fields) => {
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

module.exports.showTestDoneByUser = (testDoneByUser, idsubject) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('SELECT DISTINCT u.iduser, u.name, u.surname, tn.testName, tn.idTest FROM users as u INNER JOIN answers as a ON u.iduser=a.iduser INNER JOIN testName as tn ON tn.idTest=a.idTest WHERE tn.idsubject='+ idsubject, testDoneByUser, (err, rows, fields) => {
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
module.exports.addScore = (score, iduser, idTest) => {
    return new Promise((resolve, reject) => {
        constants.ConnectToDB.query('INSERT INTO rating SET ? ',score, (err, rows, fields) => {
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

