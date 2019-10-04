var express = require('express');
var router = express.Router();
var actorController = require('../controllers/actors');

var { getAllActors, updateActor, getStreak } = actorController;

// Routes related to actor.
router.get('/', getAllActors)
router.put('/', updateActor)
router.get('/streak', getStreak)

module.exports = router;