const express = require('express');
const app = express();
const config = require('./config/config');
const routes = require('./app/routes')
// Configuración de la aplicación
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('port', config.port);

// Configuración de las rutas
routes.init(app);

// Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

module.exports = app;