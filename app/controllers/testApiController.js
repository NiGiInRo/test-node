const logger = require('../../config/logger');
const { getJoke, getCameraInfo, movieGuestSession, getDeepBlueInfo, getCookieDeepblue } = require("../services/testApiService");
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


const getCameraInfoController = async (req, res, next) => {
  try {
    const cameraInfo = await getCameraInfo();
    console.log(`DEEPBLUE CONTROLLER: `);
    console.log(req);
    res.status(201).send(cameraInfo);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};

const getDeepBlueInfoController = async (req, res, next) => {
  try {
    const cookie = await getCookieDeepblue();
    console.log(`DEEPBLUE COOKIE: `);
    console.log(cookie);
    const deepblueInfo = await getDeepBlueInfo(cookie);
    res.status(200).send(deepblueInfo);
  } catch (err) {
    logger.info(err);
    next(err);
  }
};


module.exports = { getjokesController, getMovieGuestSessionController, getNewsController, getCameraInfoController, getDeepBlueInfoController };
