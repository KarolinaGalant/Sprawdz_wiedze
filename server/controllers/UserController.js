const app = require('../app');
const UserService = require('../services/user/UserService');
const GroupService = require('../services/group/GroupService');
const TestService = require('../services/test/TestService');

exports.log = (req,res) => {
    UserService.checkUser(req.body).then((user)=>{
       res.json(user);    
    })
};
exports.register = (req,res) => {
    UserService.createUser(req.body).then((user)=>{
        res.json(user);   
    })
};
exports.addGroup = (req,res) => {
    GroupService.addGroup(req.body).then((group)=>{
        res.json(group);    
    })
};
exports.addUserToGroup = (req,res) => {
    GroupService.addUserToGroup(req.body).then((userToGroup) => {
        res.json(userToGroup);
    })
};
exports.addTest = (req,res) => {
    TestService.addTest(req.body).then((test)=>{
        res.json(test);    
    })
};
exports.getUser = (req,res) => {
    UserService.getUser(req.body).then((user)=>{
        res.json(user);    
    })
};
exports.addAttachment = (req,res) => {
    TestService.addAttachment(req.body).then((addAttachment)=>{
        res.json(addAttachment);    
    })
};   
exports.classesList = (req,res) => {
    GroupService.classesList(req.body).then((classesList)=>{
        res.json(classesList);    
    })
};
exports.allclasseslist = (req,res) => {
    GroupService.allclasseslist(req.body).then((allclasseslist)=>{
        res.json(allclasseslist);    
    })
};
exports.getTest = (req,res) => {
    TestService.getTest(req.body).then((test)=>{
        res.json(test);    
    })
};
exports.getDoneTest = (req,res) => {
    TestService.getDoneTest(req.body,req.query.idTest).then((test)=>{
        res.json(test);    
    })
};
exports.getRating = (req,res) => {
    TestService.getRating(req.body).then((rating)=>{
        res.json(rating);    
    })
};
exports.getTestList = (req,res) => {
    TestService.getTestList(req.body).then((testList)=>{
        res.json(testList);    
    })
};
exports.addTestName = (req,res) => {
    TestService.addTestName(req.body).then((testName)=>{
        res.json(testName);    
    })
};
exports.getTestName = (req,res) => {
    TestService.getTestName(req.body, req.query.idSubject).then((testName)=>{
        res.json(testName);    
    })
};

exports.addAnswer = (req,res) => {
    TestService.addAnswer(req.body).then((answer)=>{
        res.json(answer);    
    })
};
exports.getSubjectStudent = (req,res) => {
    GroupService.getSubjectStudent(req.body).then((getSubjectStudent)=>{
        res.json(getSubjectStudent);    
    })
};
exports.getSubject = (req,res) => {
    GroupService.getSubject(req.body).then((getSubject)=>{
        res.json(getSubject);    
    })
};
exports.getMyClass = (req,res) => {
    GroupService.getMyClass(req.body).then((getMyClass)=>{
        res.json(getMyClass);    
    })
};

exports.getTestNameById = (req,res) => {
    TestService.getTestNameById(req.body, req.query.idTest).then((testName)=>{
        res.json(testName);    
    })
};

