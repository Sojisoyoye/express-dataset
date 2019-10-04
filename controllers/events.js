const models = require('../models');

const { Actor, Event, Repo } = models;

const getAllEvents = (req, res) => {
	Event.findAll({
		attributes: ['id', 'type', 'createdAt'],
		include: [
			{
				model: Actor,
				attributes: ['id', 'login', 'avatar_url']
			},
			{
				model: Repo,
				attributes: ['id', 'name', 'url']
			}
		],
		order: [
			['id', 'ASC']
		],
	}).then((events) => {
		return res.status(200).json({
			status_code: 200,
			body: events
		});
	}).catch((error) => {
		return res.status(400).json({
			status_code: 400,
			body: error
		})
	})
};

const addEvent = (req, res) => {

	const { type, actor_id, repo_id } = req.body;

	Event.create({type, actor_id, repo_id})
	.then((event) => Promise.resolve(event))
	.then((event) => {
		Event.findOne({
			attributes: ['id', 'type', 'createdAt'],
			include: [
				{
					model: Actor,
					attributes: ['id', 'login', 'avatar_url']
				},
				{
					model: Repo,
					attributes: ['id', 'name', 'url']
				}
			],
			order: [
				['id', 'ASC']
			],
			where: {
				id: event.id
			}
		})
		.then((event) => {
			return res.status(201).json({
			status_code: 201,
			body: event
		  });
	    })
		.catch((error) => {
			return res.status(400).json({
				status_code: 400,
				body: error
			});
		});
	})
	.catch((error) => {
		return res.status(400).json({
			status_code: 400,
			body: error
		});
	});
};


const getByActor = (req, res) => {
	const { id } = req.params;

	Actor.findByPk(id)
	.then((actor) => {
		if (!actor) {
			return res.status(404).json({
				status_code: 404,
				message: 'Actor not found'
			});
		};
		
		const actorId = actor.id;
		Event.findAll({
			include: [
				{
					model: Actor,
					attributes: ['id', 'login', 'avatar_url'],
				  },
				  {
					model: Repo,
					attributes: ['id', 'name', 'url'],
				},
			],
			attributes: ['id', 'type', 'createdAt'],
			order: [
				['id', 'ASC']
			],
			where: {
				actor_id: actorId
			}
		})
		.then((event) => {
			return res.status(200).json({
				status_code: 200,
				body: event
			});
		}).catch((error) => {
			return res.status(400).json({
				status_code: 400,
				body: error
			});
		})
	})
	.catch((error) => {
		return res.status(400).json({
			status_code: 400,
			body: error
		});
	})
};


const eraseEvents = (req, res) => {
	Event.destroy({ truncate : true, cascade: false })
	.then(() => {
		res.status(200).json({
			status_code: 200,
			body: {}
		})
	})
	.catch((error) => {
		return res.status(500).json({
			status_code: 500,
			body: error
		});
	})
};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents
};

















