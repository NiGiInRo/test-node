const { databaseError } = require('../errors');
const logger = require('../../config/logger');
const db = require('../models/index');

const getUsersService = async (page = 0, size = 10) => {
  try {
    console.log('MODELOS');
    console.log(db);
    const users = await db.User.findAll({ limit: size, offset: page * size });
    return users;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed.');
  }
};

const createUserService = async body => {
  try {
    const user = await db.User.create(body);
    return user.save();
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const deleteUserByIdService = async id => {
  try {
    const user = await db.User.destroy({ where: { id: id } });
    return user;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const updateUserByIdService = async (id, body) => {
  try {
    const user = await db.User.update( body , { where: { id: id }, returning: true });
    return user[1][0];
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const searchEmailService = async email => {
  try {
    console.log("MODELO");
    console.log(db.models);
    const user = await db.User.findOne({ where: { email } });
    return user;
  } catch (err) {
    logger.error(err);
    throw databaseError('connection with db failed.');
  }
};

module.exports = { getUsersService, createUserService, deleteUserByIdService, updateUserByIdService, searchEmailService };