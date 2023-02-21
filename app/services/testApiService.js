const axios = require('axios');
const { apiError } = require('../errors');

const getJoke = async () => {
  try {
    const response = await axios({
      url: 'https://geek-jokes.sameerkumar.website/api?format=json'
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw apiError('api connection failed.');
  }
};
module.exports = { getJoke };