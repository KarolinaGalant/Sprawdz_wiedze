var GroupRepository = require('../../repository/group');

module.exports.addGroup = (group) => {
    return GroupRepository.addGroup(group);
}
module.exports.addUserToGroup = (userToGroup) => {
    return GroupRepository.addUserToGroup(userToGroup);
}
module.exports.classesList = (classesList) => {
    return GroupRepository.classesList(classesList);
}
module.exports.allclasseslist = (allclasseslist) => {
    return GroupRepository.allclasseslist(allclasseslist);
}
module.exports.getSubject = (getSubject) => {
    return GroupRepository.getSubject(getSubject);
}
module.exports.getSubjectStudent = (getSubjectStudent) => {
    return GroupRepository.getSubjectStudent(getSubjectStudent);
}
module.exports.getMyClass = (getMyClass) => {
    return GroupRepository.getMyClass(getMyClass);
}
