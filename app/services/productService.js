const { databaseError } = require('../errors');
const logger = require('../../config/logger');
const db = require('../models/index');

const getProductsService = async (page = 0, size = 10) => {
  try {
    const products = await db.Product.findAll({ limit: size, offset: page * size });
    return products;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed.');
  }
};

const createProductService = async body => {
  try {
    const product = await db.Product.create(body);
    return product.save();
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

const deleteProductByIdService = async id => {
  try {
    const product = await db.Product.destroy({ where: { id: id } });
    return product;
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};
  
const updateProductByIdService = async (id, body) => {
  try {
    const product = await db.Product.update( body , { where: { id: id }, returning: true });
    return product[1][0];
  } catch (err) {
    logger.info(err);
    throw databaseError('connection with db failed or invalid data. check and try again ');
  }
};

module.exports = { getProductsService, createProductService, deleteProductByIdService, updateProductByIdService };
