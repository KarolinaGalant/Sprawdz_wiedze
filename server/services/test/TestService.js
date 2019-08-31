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
module.exports.getTestName =  (testName) => {
    return TestRepository.getTestName(testName);
}
module.exports.getDoneTest =  (test) => {
    return TestRepository.getDoneTest(test);
}
module.exports.addAnswer =  (answer) => {
    return TestRepository.addAnswer(answer);
}
