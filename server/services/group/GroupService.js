var GroupRepository = require('../../repository/group');

module.exports.addGroup = (group) => {
    return GroupRepository.addGroup(group);
}
module.exports.addUserToGroup = (userToGroup) => {
    return GroupRepository.addUserToGroup(userToGroup);
}
module.exports.classesList = (classesList, iduser) => {
    return GroupRepository.classesList(classesList, iduser);
}
module.exports.allclasseslist = (allclasseslist) => {
    return GroupRepository.allclasseslist(allclasseslist);
}
module.exports.getSubject = (getSubject) => {
    return GroupRepository.getSubject(getSubject);
}
module.exports.getSubjectStudent = (getSubjectStudent, idsubject) => {
    return GroupRepository.getSubjectStudent(getSubjectStudent, idsubject);
}
module.exports.getMyClass = (getMyClass) => {
    return GroupRepository.getMyClass(getMyClass);
}
