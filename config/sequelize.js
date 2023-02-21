const Sequelize = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(dbConfig.development);

const models = {
  User: sequelize.import('../models/user.js'),
  // Otros modelos aquí
};

sequelize.sync();

module.exports = {
  sequelize,
  models
};