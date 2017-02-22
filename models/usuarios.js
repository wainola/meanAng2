// generacion del schema de la base de datos.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Generamos el esquema de la base de datos.

const EsquemaUsuarios = mongoose.Schema({
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

const Usuarios = module.exports = mongoose.model('Usuarios', EsquemaUsuarios);

// metodos de llamada de la api.
// metodo de obtencion de registro.
//--------------------------------------------------
module.exports.getRegistroPorId = function(registroId, callback){
    Usuarios.findById(registroId, callback);
}
// metodo de registro.
//--------------------------------------------------
module.exports.addRegistro = function(nuevoRegistro, callback){
    nuevoRegistro.save(callback);
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