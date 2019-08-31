const express = require('express');
const router = express.Router();

const ApplicationsController = require('../controllers/ApplicationsController');

router.post('/applications',ApplicationsController.store );

module.exports = router;
