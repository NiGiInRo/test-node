const axios = require('axios');
const { apiError } = require('../errors');
const logger = require('pino');

const getNews = async (q, from, sortBy) => {
  try {
    const response = await axios({
      url: `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${process.env.NEWS_API_KEY}`
    });
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};
module.exports = { getNews };