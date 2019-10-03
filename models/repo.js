'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Repo.associate = function(models) {
    Repo.hasMany(models.Event, {
      foreignKey: 'repo_id'
    });
  };
  return Repo;
};