var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');


router.post('/login', UserController.log);
router.post('/register', UserController.register);
router.post('/addGroup', UserController.addGroup);
router.post('/addUserToGroup', UserController.addUserToGroup);
router.post('/addTest', UserController.addTest);
router.post('/getUser', UserController.getUser);
router.post('/addAttachment', UserController.addAttachment);
router.post('/classeslist', UserController.classesList);
router.post('/allclasseslist', UserController.allclasseslist);
router.post('/getTest', UserController.getTest);
router.post('/getRating', UserController.getRating);
router.post('/getTestList', UserController.getTestList);
router.post('/getSubject', UserController.getSubject);
router.post('/getSubjectStudent', UserController.getSubjectStudent);
router.post('/getMyClass', UserController.getMyClass);
router.post('/addTestName', UserController.addTestName);
router.post('/getTestName', UserController.getTestName);
router.post('/getDoneTest', UserController.getDoneTest);
router.post('/addAnswer', UserController.addAnswer);

module.exports = router;

