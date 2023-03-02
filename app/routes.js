
const { getjokesController } = require('./controllers/testApiController');
const { getUsersController, createUserController, deleteUserController, updateUsercontroller, userLogin, googleUser } = require('./controllers/userController');
const { validateSchema, validateRole, validateJWT } = require('./middlewares');
const { validateSignInUser } = require('./middlewares/schemas/sign-in-schema');
const { validateCreationUser } = require('./middlewares/schemas/userSchema');
exports.init = app => {
    app.get('/geek', getjokesController);
    
    //users:
    app.get('/users', getUsersController);
    app.post('/users/create', [validateCreationUser, validateJWT, validateRole, validateSchema], createUserController);
    app.put('/users/:id/update', [validateCreationUser, validateJWT, validateRole, validateSchema], updateUsercontroller);
    app.delete('/users/:id/delete', [validateJWT, validateRole], deleteUserController);
    app.post('/users/sessions', [validateSignInUser, validateSchema], userLogin);
    app.get("/auth/google", googleUser)

};
