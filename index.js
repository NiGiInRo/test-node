const express = require('express');
const app = express();
const config = require('./config/config');
const routes = require('./app/routes')
const { googleLogin } = require('./app/middlewares/google');
// Configuración de la aplicación
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('port', config.port);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', [googleLogin]);

// Configuración de las rutas
routes.init(app);


// Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

module.exports = app;