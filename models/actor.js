'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    login: DataTypes.STRING,
    avatar_url: DataTypes.STRING
  }, {});
  Actor.associate = function(models) {
    Actor.hasMany(models.Event, {
      foreignKey: 'actor_id'
    });
  };
  return Actor;
};