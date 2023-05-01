const logger = require('../../config/logger');
const { getProductsSerializer, newProductSerializer } = require('../serializers/productSerializer');
const { newProductMapper } = require('../mappers/productMapper');
const { createProductService, getProductsService, deleteProductByIdService, updateProductByIdService } = require('../services/productService');

const getProductsController = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const getProducts = await getProductsService(page, size);
    const listProducts = getProductsSerializer(getProducts);
    res.status(200).json(listProducts);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};
  
const createProductController = async (req, res, next) => {
  try {
    const productMapper = newProductMapper(req.body);
    productMapper.creatorId = req.header.user.uid
    const newProduct = await createProductService(productMapper);
    const product = newProductSerializer(newProduct);
    res.status(201).json(product);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const deleteProductController = async (req, res, next) => {
  try {
    const product = await deleteProductByIdService(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const updateProductcontroller = async (req, res, next) => {
  try {
    const productMapper = newProductMapper(req.body);
    const updateProduct = await updateProductByIdService(req.params.id, productMapper);
    const product = newUserSerializer(updateProduct);
    res.status(201).json(product);
  } catch (err) {

    logger.info(err);
    next(err);
  }
};

module.exports = { getProductsController, createProductController, deleteProductController, updateProductcontroller }