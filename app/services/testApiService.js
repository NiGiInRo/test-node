const axios = require('axios');
const { apiError } = require('../errors');
const logger = require('pino');

const getJoke = async () => {
  try {
    const response = await axios({
      url: 'https://geek-jokes.sameerkumar.website/api?format=json'
    });
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};


const movieGuestSession = async movieId => {
  try {
    const response = await axios({
      url: `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.MOVIES_API_KEY}`
    });
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};


const getMovieDetails = async movieId => {
  try {
    const response = await axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIES_API_KEY}&language=en-US`
    });
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};

const rateMovie = async movieId => {
  try {
    const response = await axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${process.env.MOVIES_API_KEY}`,
      method: 'POST'
    });
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};

module.exports = { getJoke, movieGuestSession, getMovieDetails, rateMovie};
