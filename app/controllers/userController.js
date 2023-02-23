const logger = require('../../config/logger');
const { encryptPassword } = require('../helpers');
const { newUserMapper } = require('../mappers/userMapper');
const { getUsersSerializer, newUserSerializer } = require('../serializers/userSerializer');
const { getUsersService, createUserService, deleteUserByIdService, updateUserByIdService } = require('../services/userService');

const getUsersController = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const getUsers = await getUsersService(page, size);
    const listUsers = getUsersSerializer(getUsers);
    res.status(200).json(listUsers);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};
  
const createUserController = async (req, res, next) => {
  try {
    const userMapper = newUserMapper(req.body);
    userMapper.password = encryptPassword(req.body.password);
    const newUser = await createUserService(userMapper);
    const user = newUserSerializer(newUser);
    res.status(201).json(user);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const user = await deleteUserByIdService(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const updateUsercontroller = async (req, res, next) => {
  try {
    const userMapper = newUserMapper(req.body);
    userMapper.password = encryptPassword(req.body.password);
    const updateUser = await updateUserByIdService(req.params.id, userMapper);
    const user = newUserSerializer(updateUser);
    res.status(201).json(user);
  } catch (err) {

    logger.info(err);
    next(err);
  }
};

module.exports = { getUsersController, createUserController, deleteUserController, updateUsercontroller }