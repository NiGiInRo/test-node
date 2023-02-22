const Sequelize = require('sequelize');
const dbConfig = require('./config');
const User = require('../app/models/user');
const sequelize = new Sequelize(dbConfig.development);

const models = {
  User: User(sequelize, Sequelize.DataTypes),
  // Otros modelos aquí
};
console.log('DB::');
console.log(dbConfig);

sequelize.sync();

module.exports = {
  sequelize,
  models
};