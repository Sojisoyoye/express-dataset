const models = require('../models');

const { Actor, Event } = models;

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

var updateActor = (req, res) => {
	const { id, avatar_url } = req.body;

	Actor.findByPk(id)
	.then((actor) => {
		if (!actor) {
			return res.status(404).json({
				status_code: 404,
				message: 'Actor not found'
			});
		};

		actor.update({
			avatar_url
		});

		return res.status(200).json({
			status_code: 200,
			body: {}
		});

	}).catch((error) => {
		return res.status(400).json({
			status_code: 400,
			body: error
		})
	})
};

const getStreak = (req, res) => {
	Actor.findAll({
		include: [{
			model: Event,
			attributes: {
			exclude: ['id', 'type', 'actor_id', 'repo_id', 'createdAt', 'updatedAt']
			}
		}],
		order: [
			['createdAt', 'DESC'],
			['login', 'DESC']
		],
		attributes: ['id', 'login', 'avatar_url']
	})
	.then((actors) => {
		return res.status(200).json({
			status_code: 200,
			body: actors
		})
	})
	.catch((error) => {
		return res.status(400).json({
			status_code: 400,
			body: error
		})
	})
};


module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};

















