module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Events', [{
    "type": "PushEvent",
    "actor_id": "1",
    "repo_id": "1",
  }, {
    "type": "PushEvent",
    "actor_id": "2",
    "repo_id": "2",
  }, {
    "type": "PushEvent",
    "actor_id": "3",
    "repo_id": "3",
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Events', null, {})
};


