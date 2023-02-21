const { getJoke } = require("../services/testApiService");

const getjokesController = async (req, res, next) => {
  try {
    const joke = await getJoke();
    res.status(200).send(joke);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = { getjokesController };