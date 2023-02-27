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
    const user = await models.User.create(body);
    return user.save();
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const deleteUserByIdService = async id => {
  try {
    const user = await models.User.destroy({ where: { id: id } });
    return user;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const updateUserByIdService = async (id, body) => {
  try {
    const user = await models.User.update( body , { where: { id: id }, returning: true });
    return user[1][0];
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const searchEmailService = async email => {
  try {
    const user = await models.User.findOne({ where: { email } });
    return user;
  } catch (err) {
    logger.error(err);
    throw databaseError('connection with db failed.');
  }
};

module.exports = { getUsersService, createUserService, deleteUserByIdService, updateUserByIdService, searchEmailService };