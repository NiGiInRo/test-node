const logger = require('pino');
const { getJoke, getMovieDetails, movieGuestSession } = require("../services/testApiService");
const { getNews } = require("../services/testNewsApiService");

const getjokesController = async (req, res, next) => {
  try {
    const joke = await getJoke();
    res.status(200).send(joke);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const getNewsController = async (req, res, next) => {
  try {
    const { q, from, sortBy } = req.query
    const news = await getNews(q, from, sortBy);
    res.status(200).send(news);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const getMovieGuestSessionController = async (req, res, next) => {
  try {
    const id = await movieGuestSession();
    res.status(200).send(id);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};


const getMovieDetailsController = async (req, res, next) => {
  try {
    const movie = await getMovieDetails(req.params.id);
    res.status(200).send(movie);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

module.exports = { getjokesController, getMovieGuestSessionController, getNewsController, getMovieDetailsController };
