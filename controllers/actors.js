const models = require('../models');
var actorController = require('../controllers/actors');

var { getAllActors } = actorController;

const { Actor } = models;

var getAllActors = (req, res) => {
	Actor.findAll({
		attributes: ['id', 'login', 'avatar_url'],
	})
	.then((actors) => {
		return res.status(200).json({
			status_code: 200,
			body: actors
		});
	}).catch((error) => {
		return res.status(400).json({
			status_code: 400,
			error
		})
	})
	
};

var updateActor = () => {

};

var getStreak = () => {

};


module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};

















