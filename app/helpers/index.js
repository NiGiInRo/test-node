const logger = require("../../config/logger");
const bcrypt = require('bcrypt');
const { badRequestError, tokenError } = require("../errors");
const jwt = require('jsonwebtoken');

const userJWT = (uid, role_id, name, last_name, birth_day) => {
  try {
    const payload = { uid, role_id, name, last_name, birth_day };
    const token = jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, { expiresIn: '1h' });
    return token;
  } catch (err) {
    logger.error(err);
    return tokenError('JWT not genereated');
  }
};

const encryptPassword = password => {
  try {
    const validPass = bcrypt.hashSync(password, 8);
    return validPass;
  } catch (error) {
    logger.info(error);
    return defaultError('failed encrypt password');
  }
};

const validatePassword = (password1, password2) => {
    try {
      const validPass = bcrypt.compareSync(password1, password2);
      return validPass;
    } catch (error) {
      logger.error(error);
      return defaultError('failed password validation');
    }
  };
  
  const validateCredentials = (user, password) => {
    try {
      if (!user) {
        throw badRequestError('incorrect User / Password');
      }
      const validPass = validatePassword(password, user.password);
      if (validPass === false) {
        throw badRequestError('incorrect User / Password');
      }
      return validPass;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  };
module.exports= { userJWT, encryptPassword, validateCredentials };
