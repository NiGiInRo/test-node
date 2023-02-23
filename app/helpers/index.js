const logger = require("../../config/logger");
const bcrypt = require('bcrypt');

const encryptPassword = password => {
  try {
    const validPass = bcrypt.hashSync(password, 8);
    return validPass;
  } catch (error) {
    logger.info(error);
    return defaultError('failed encrypt password');
  }
};

module.exports= { encryptPassword };
