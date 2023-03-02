const logger = require('../../config/logger');
const { newGoogleUserMapper } = require('../mappers/userMapper');
const { encryptPassword } = require('../helpers');
const { createUserService } = require('../services/userService');
const newUserAuthGoogle = async dataUser => {
  try {
    console.log('USUARIO');
    console.log(dataUser);
    const googleMapper = newGoogleUserMapper(dataUser);
    googleMapper.password = encryptPassword(googleMapper.password);
    const newUser = await createUserService(googleMapper);
    return newUser;
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

module.exports = { newUserAuthGoogle }
