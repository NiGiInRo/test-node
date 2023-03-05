
const { getjokesController, getNewsController, getMovieDetailsController, getMovieGuestSessionController } = require('./controllers/testApiController');
const { getUsersController, createUserController, deleteUserController, updateUsercontroller, userLogin, googleUser } = require('./controllers/userController');
const { validateSchema, validateRole, validateJWT } = require('./middlewares');
const { validateSignInUser } = require('./middlewares/schemas/sign-in-schema');
const { validateCreationUser } = require('./middlewares/schemas/userSchema');
exports.init = app => {
    //apis integrations
    app.get('/geek', getjokesController);
    app.get('/news', getNewsController);
    app.get('/movies/guest', getMovieGuestSessionController);
    app.get('/movie/:id', getMovieDetailsController);
    
    //users:
    app.get('/users', getUsersController);
    app.post('/users/create', [validateCreationUser, validateJWT, validateRole, validateSchema], createUserController);
    app.put('/users/:id/update', [validateCreationUser, validateJWT, validateRole, validateSchema], updateUsercontroller);
    app.delete('/users/:id/delete', [validateJWT, validateRole], deleteUserController);
    app.post('/users/sessions', [validateSignInUser, validateSchema], userLogin);
    app.get("/auth/google", googleUser)

};
