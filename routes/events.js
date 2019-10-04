var express = require('express');
var router = express.Router();
var eventController = require('../controllers/events');

var { getAllEvents, addEvent, getByActor } = eventController;

// Routes related to event
router.get('/', getAllEvents);
router.post('/', addEvent);
router.get('/actors/:id', getByActor);
  
module.exports = router;

