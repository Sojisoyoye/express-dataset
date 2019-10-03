module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Repos', [{
    "name":"cohenjacqueline/quam-autem-suscipit",
    "url":"https://github.com/cohenjacqueline/quam-autem-suscipit"
  }, {
    "name":"cohenjacqueline/quam-autem-suscipit",
    "url":"https://github.com/cohenjacqueline/quam-autem-suscipit"
  }, {
    "name":"cohenjacqueline/quam-autem-suscipit",
    "url":"https://github.com/cohenjacqueline/quam-autem-suscipit"
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Repos', null, {})
};

