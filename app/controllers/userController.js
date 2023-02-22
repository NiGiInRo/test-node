const logger = require('../../config/logger');
const { newUserMapper } = require('../mappers/userMapper');
const { getUsersSerializer, newUserSerializer } = require('../serializers/userSerializer');
const { getUsersService, createUserService } = require('../services/userService');

const getUsersController = async (req, res, next) => {
    try {
      const { page, size } = req.query;
      const getUsers = await getUsersService(page, size);
      const listUsers = getUsersSerializer(getUsers);
      res.status(200).send(listUsers);
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };
  
  const createUserController = async (req, res, next) => {
    try {
      console.log('USER: ');
      console.log(req.body);
      const userMapper = newUserMapper(req.body);
      const newUser = await createUserService(userMapper);
      const user = newUserSerializer(newUser);
      res.status(201).send(user);
    } catch (err) {
      logger.info(err);
      next(err);
    }
  };

  module.exports = { getUsersController, createUserController }