const { getjokesController } = require('./controllers/testApiController')
exports.init = app => {
    app.get('/geek', getjokesController)
};