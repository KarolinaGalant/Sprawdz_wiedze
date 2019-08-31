var TestRepository =require('../../repository/test');

module.exports.addTest =  (test) => {
    return TestRepository.addTest(test);
}
// module.exports.addUserToGroup =  (userToGroup) => {
//     GroupRepository.addUserToGroup(userToGroup);

module.exports.addAttachment =  (attachment) => {
    return TestRepository.addTest(attachment);
}

module.exports.getTest =  (test) => {
    return TestRepository.getTest(test);
}
module.exports.getRating =  (rating) => {
    return TestRepository.getRating(rating);
}
module.exports.getTestList =  (testList) => {
    return TestRepository.getTestList(testList);
}
module.exports.addTestName =  (testName) => {
    return TestRepository.addTestName(testName);
}
module.exports.getTestName =  (testName, idSubject) => {
    return TestRepository.getTestName(testName, idSubject);
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
