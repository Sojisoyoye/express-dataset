'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    type: DataTypes.STRING,
    actor_id: DataTypes.STRING,
    repo_id: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Actor, {
      foreignKey: 'actor_id'
    });
    Event.belongsTo(models.Repo, {
      foreignKey: 'repo_id'
    });
  };
  return Event;
};

