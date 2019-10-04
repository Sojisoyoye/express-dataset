var express = require('express');
var router = express.Router();
var actorController = require('../controllers/actors');

var { getAllActors } = actorController;

// Routes related to actor.
router.get('/', getAllActors)

module.exports = router;