
const { getProductsController, createProductController } = require('./controllers/productController');
const { getjokesController, getNewsController, getCameraInfoController, getMovieGuestSessionController, getDeepBlueInfoController } = require('./controllers/testApiController');
const { getUsersController, createUserController, deleteUserController, updateUsercontroller, userLogin, googleUser } = require('./controllers/userController');
const { validateSchema, validateRole, validateJWT, validateCurrentUser } = require('./middlewares');
const { validateCreationProduct } = require('./middlewares/schemas/productSchema');
const { validateSignInUser } = require('./middlewares/schemas/sign-in-schema');
const { validateCreationUser } = require('./middlewares/schemas/userSchema');
exports.init = app => {
    //apis integrations
    app.get('/geek', getjokesController);
    app.get('/news', getNewsController);
    app.get('/movies/guest', getMovieGuestSessionController);
    app.post('/camera', getCameraInfoController);
    app.get('/depblue', getDeepBlueInfoController);
    
    //users:
    app.get('/users', getUsersController);
    app.post('/users/create', [validateCreationUser, validateJWT, validateRole, validateSchema], createUserController);
    app.put('/users/:id/update', [validateCreationUser, validateJWT, validateRole, validateSchema], updateUsercontroller);
    app.delete('/users/:id/delete', [validateJWT, validateRole], deleteUserController);
    app.post('/users/sessions', [validateSignInUser, validateSchema], userLogin);
    app.get("/auth/google", googleUser)

    //products
    app.get('/products', [validateJWT], getProductsController);
    app.post('/products/create', [validateCreationProduct, validateJWT, validateRole, validateSchema], createProductController);

};
