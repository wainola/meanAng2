// Script principal que inicia el servidor y establece las rutas de este.
// Importaciones de los modulos a utilizar por nuestra aplicacion.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// importamos objeto que en su atributo tiene la URI a la base de datos.
const config = require('./config/database');

//############ Conexion con la base de datos ##########
// al iniciar el servidor inicializamos la conexion con la base de datos.
mongoose.connect(config.database);
//verificamos la conexion a la base de datos.
mongoose.connection.on('connected', () => {
    console.log('Base de datos conectada ' + config.database);
});
// Error de conexion.
mongoose.connection.on('error', (err) => {
    console.log('Conexion a la base de datos ' + err);
});

//######## Inicializacion de la aplicacion ############
const app = express();
// variable que referencia la ruta hacia los metodos de la base de datos.
const usuarios = require('./rutas/usuarios');
// puerto que usa la aplicacion.
// ===============================================
// PUERTO LOCAL PARA DESARROLLO LOCAL. DESCOMENTAR.
// ===============================================
const puerto = 3000;
// ===============================================
// PUERTO REMOTO EN HEROKU PARA DEPLOY.
// ==============================================
//const puerto = process.env.PORT || 8080;
// generacion de cors.
app.use(cors());
//establecimiento de referencia al directorio de archivos estaticos.
// en este directorio se hace el build de Angular 2.
app.use(express.static(path.join(__dirname, 'public')));
// middleware BodyParser.
app.use(bodyParser.json());
//middleware de Passport => manejo de estrategias de autenticacion.
app.use(passport.initialize());
app.use(passport.session());
//requerimiento de la estrategia de autenticacion.
require('./config/passport')(passport);

//############# Manejo de rutas url y respuestas.
app.use('/usuarios', usuarios);
// ruta a la pagina principal => home
app.get('/', (req, res) => {
    res.send('Principal Endpoint :)');
});

//configuracion de directorio de archivos estaticos. Angular 2.
app.use(express.static(path.join(__dirname, 'public')));

// luego del build, todas las rutas dirigen al mismo archivo que es donde el cliente esta construido.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//############ Inicializacion del servidor.
app.listen(puerto, () => {
    console.log('Servidor inicializado en el puerto ' + puerto);
});


