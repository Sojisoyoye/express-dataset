var express = require('express');
var router = express.Router();
var eventController = require('../controllers/events');

var { eraseEvents } = eventController;

// Route related to delete events
router.delete('/', eraseEvents);

module.exports = router;