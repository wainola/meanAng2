/*
NOTAS.
--------------------------------------------
1.- El registro de usuarios es sin autenticacion. Esto porque el registro se hace una vez que la persona se ha logeado. 
2.- Generar entonces metodos de instancias de loggeo.
--------------------------------------------
*/
// generacion del schema de la base de datos.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Generamos el esquema de la base de datos.

const EsquemaRegistros = mongoose.Schema({
    curso: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    partner: {
        type: String,
        required: true
    },
    observadores: {
        type: [String],
        required: true
    },
    informacionExtra: {
        type: String
    }
});
// TODO: el registro de usuario debe asociarse al registro de cursos. ¿Usar como subdocumento nemez?
const EsquemaUsuarios = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    direccion: {
        type: [String],
        required: true
    },
    asignaturasAlumno: [EsquemaRegistros]
});

const Usuarios = module.exports = mongoose.model('Usuarios', EsquemaUsuarios);

// metodos de llamada de API para registro de usuarios.

module.exports.addUser = function(nuevoUsuarioPlataforma, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(nuevoUsuarioPlataforma.password, salt, (err, hash) => {
            if(err) throw err;
            nuevoUsuarioPlataforma.password = hash;
            nuevoUsuarioPlataforma.save(callback);
        });
    });
};

module.exports.getUser = function(){}

// metodos de llamada de la api para el registro de cursos.

// metodo de registro.
//--------------------------------------------------
module.exports.addRegistro = function(usuario, nuevoregistro){
   usuario.asignaturasAlumno.push(nuevoregistro);
   usuario.save(nuevoregistro);
}
// metodo de obtencion de registro.
//--------------------------------------------------
module.exports.getRegistroPorId = function(registroId, callback){
    Usuarios.findById(registroId, callback);
}
  
// metodo para borrar un registro.
//-------------------------------------------------
module.exports.borrarUsuarioPorId = function(borrarRegistro, callback){
    Usuarios.findByIdAndRemove(borrarRegistro, callback);
}
//metodo para borrar todos.
//------------------------------------------------
//TODO: de persistir el metodo, borrar con autenticado.
module.exports.borrarTodos = function(callback){
    Usuarios.find().remove(callback);
}
