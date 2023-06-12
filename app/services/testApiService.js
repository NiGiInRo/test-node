const axios = require('axios');
const { apiError } = require('../errors');
const logger = require('../../config/logger');
const FormData = require('form-data');

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

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const getCameraInfo = async () => {
  try {
    let data = new FormData();
    data.append('username', 'pa_user');
    data.append('password', 'p4Us3r.1');
    const response = await axios({
      url: `https://10.152.10.23/dbc2/api/login`,
      method: 'POST',
      headers: { 
        //'Cookie': 'TNUserSession=k4p9cknasqkkuk22og1qeqe87d; current_project=deepbluedb; current_project_name=DeepBlueCore',
        ...data.getHeaders(),
        //'Authorization': {username: 'admin', password: 'ARM$2021'},
      },
      data : data,
      rejectUnauthorized: false
    }); 
    const cookie = response.headers['set-cookie'];
    console.log('Cookie generada:', cookie);
    console.log(`DEEPBLUE SERVICE Login: ${response.headers}`);
    return response.data;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const getCookieDeepblue = async () => {
  try {
    let data = new FormData();
    data.append('username', 'pa_user');
    data.append('password', 'p4Us3r.1');
    const response = await axios({
      url: `https://10.152.10.23/dbc2/api/login`,
      method: 'POST',
      headers: { 
        //'Cookie': 'TNUserSession=k4p9cknasqkkuk22og1qeqe87d; current_project=deepbluedb; current_project_name=DeepBlueCore',
        ...data.getHeaders(),
        //'Authorization': {username: 'admin', password: 'ARM$2021'},
      },
      data : data,
      rejectUnauthorized: false
    }); 
    const cookie = response.headers['set-cookie'];
    
    console.log(`DEEPBLUE service GETcookie1: ${cookie}`);
    return cookie;
  } catch (err) {
    logger.info(err);
    throw apiError('api connection failed.');
  }
};

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const getDeepBlueInfo = async (cookie) => {
  try {
    const response = await axios({
      url: `https://10.152.10.23/dbc2/api/projects/deepbluedb/sensors/1?advanced=1`,
      method: 'GET',
      headers: { 
        'Cookie': cookie,
      },
      rejectUnauthorized: false
    });
    
    console.log(`DEEPBLUE service cookie: ${cookie}`);
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

module.exports = { getJoke, movieGuestSession, getCameraInfo, getDeepBlueInfo, rateMovie, getCookieDeepblue};
