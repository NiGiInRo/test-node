const { getjokesController } = require('./controllers/testApiController');
const { getUsersController, createUserController, deleteUserController, updateUsercontroller } = require('./controllers/userController');
const { validateSchema } = require('./middlewares');
const { validateCreationUser } = require('./middlewares/schemas/userSchema');
exports.init = app => {
    app.get('/geek', getjokesController);
    
    //users:
    app.get('/users', getUsersController);
    app.post('/users/create', [validateCreationUser, validateSchema], createUserController);
    app.put('/users/:id/update', updateUsercontroller);
    app.delete('/users/:id/delete', deleteUserController);
};