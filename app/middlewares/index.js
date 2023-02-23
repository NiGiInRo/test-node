const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const logger = require('../../config/logger');

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
  
      const tokenData = jwt.verify(bearer, config.common.jwt_token.secret);
      req.header.user = tokenData;
      return next();
    } catch (err) {
      logger.info(err)
      return next(err);
    }
  };

module.exports = { validateSchema, validateJWT };
