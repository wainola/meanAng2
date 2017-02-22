// importacion de modulos para el establecimiento de la estrategia de autenticacion.
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// Importacion del modelo compilado de la base de datos.
const Usuarios = require('../models/usuarios');
const config = require('../config/database');

// generacion de estrategia de autenticacion.
module.exports = function(passport){
    /*let opciones = {};
    opciones.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opciones.secrentOnKey = config.secret;
    // generacion de la estrategia.
    passport.use(new JwtStrategy(opciones, (jwt_payload, done) => {
        console.log(jwt_payload);
        // invocacion de metodo que busca usuarios por ID.
        Usuarios.getUserById(jwt_payload._doc._id, (err, usuario) => {
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));*/
};