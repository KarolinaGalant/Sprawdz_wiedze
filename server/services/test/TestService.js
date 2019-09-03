var TestRepository =require('../../repository/test');

module.exports.addTest =  (test, iduser) => {
    return TestRepository.addTest(test, iduser);
}
// module.exports.addUserToGroup =  (userToGroup) => {
//     GroupRepository.addUserToGroup(userToGroup);

module.exports.addAttachment =  (attachment) => {
    return TestRepository.addTest(attachment);
}

module.exports.getTest =  (test, idTest) => {
    return TestRepository.getTest(test, idTest);   
}
module.exports.getTestToCheck =  (test, idTest, idUserTest) => {
    return TestRepository.getTestToCheck(test, idTest, idUserTest);
}
module.exports.getRating =  (rating, iduser) => {
    return TestRepository.getRating(rating, iduser);
}
module.exports.getTestList =  (testList, iduser) => {
    return TestRepository.getTestList(testList, iduser);
}
module.exports.addTestName =  (testName, idsubject) => {
    return TestRepository.addTestName(testName, idsubject);
}
module.exports.getTestName =  (testName, idsubject) => {
    return TestRepository.getTestName(testName, idsubject);
}
module.exports.getDoneTest =  (test, idTest) => {
    return TestRepository.getDoneTest(test, idTest);
}
module.exports.addAnswer =  (answer) => {
    return TestRepository.addAnswer(answer);
}
module.exports.getTestNameById =  (testName, idTest) => {
    return TestRepository.getTestNameById(testName, idTest);
}
module.exports.getTestNameBySubject =  (testName, idsubject) => {
    return TestRepository.getTestNameBySubject(testName, idsubject);
}
module.exports.getTestRating =  (rating, idsubject) => {
    return TestRepository.getTestRating(rating, idsubject);
}
// module.exports.getTestRating =  (rating, idsubject, iduser) => {
//     return TestRepository.getTestRating(rating, idsubject, iduser);
// }
module.exports.getTestNameSub =  (testName, idsubject) => {
    return TestRepository.getTestNameSub(testName, idsubject);
}
module.exports.showTestDoneByUser =  (testDoneByUser, idsubject) => {
    return TestRepository.showTestDoneByUser(testDoneByUser, idsubject);
}
module.exports.addScore =  (score, iduser, idTest ) => {
    return TestRepository.addScore(score, iduser, idTest );
}


