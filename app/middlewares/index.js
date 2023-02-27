const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const logger = require('../../config/logger');
const { userRoles } = require('../helpers/userRoles');

const validateSchema = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};


const validateJWT = (req, res, next) => {
    try {
      const token = req.header('authorization');
      if (!token) {
        return res.status(401).json({ msg: 'No token on request' });
      }
      const bearer = token.split(' ')[1];
  
      const tokenData = jwt.verify(bearer, process.env.SECRET_PRIVATE_KEY);
      req.header.user = tokenData;
      return next();
    } catch (err) {
      logger.info(err)
      return next(err);
    }
  };

  const validateRole = (req, res, next) => {
    try {
      if (req.header.user.role_id !== userRoles.admin) {
        return res.status(401).json({ msg: 'Must be Admin' });
      }
      return next();
    } catch (error) {
      logger.error(error);
      throw error;
    }
  };

module.exports = { validateSchema, validateJWT, validateRole };
