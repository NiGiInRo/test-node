const { getjokesController } = require('./controllers/testApiController');
const { getUsersController, createUserController } = require('./controllers/userController');
exports.init = app => {
    app.get('/geek', getjokesController);
    
    //users:
    app.get('/users', getUsersController);
    app.post('/users/create', createUserController);
};