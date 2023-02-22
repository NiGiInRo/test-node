const { databaseError } = require('../errors');
const logger = require('../../config/logger');
const { models } = require('../../config/sequelize');

const getUsersService = async (page = 0, size = 10) => {
  try {
    const users = await models.User.findAll({ limit: size, offset: page * size });
    return users;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed.');
  }
};

const createUserService = async body => {
  try {
    console.log('SERVICE: ');
    console.log(models);
    const user = await models.User.create(body);
    return user.save();
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

module.exports = { getUsersService, createUserService };