module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Actors', [{
    "login":"xnguyen",
    "avatar_url":"https://avatars.com/2222918"
  }, {
    "login":"iholloway",
    "avatar_url":"https://avatars.com/4276597"
  }, {
    "login":"oscarschmidt",
    "avatar_url":"https://avatars.com/2917996"
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Actors', null, {})
};

