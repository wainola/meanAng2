// importaciones y metodos http.
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
// Importamos el schema compilado de la base de datos.
const Usuarios = require('../models/usuarios');

//establecimiento de rutas asociadas a metodos http.
//registro de usuario.
//--------------------------------------------
router.post('/registro', (req, res) => {
    let nuevoRegistro = new Usuarios({
        curso: req.body.curso,
        horario: req.body.horario,
        instructor: req.body.instructor,
        partner: req.body.partner,
        observadores: req.body.observadores.split(','),
        informacionExtra: req.body.informacionExtra
    });
    Usuarios.addRegistro(nuevoRegistro, (err, registro) => {
        if(err){
            res.json({success: false, msg: 'Error al añadir registro'});
        } else {
            res.json({success: true, msg: registro});
        }
    });
});
//obtencion de un usuario.
//--------------------------------------------
router.get('/registro/:usuarioid', (req, res) => {
    let registroId = req.params.usuarioid;
    Usuarios.getRegistroPorId(registroId, (err, registro) => {
        if(err){
            res.json({success:false, msg: 'Registro no encontrado'});
        } else {
            console.log('Registro encontrado');
            res.json({success: true, msg: registro});
        }
    });
});
//borrado de un usuario.
//------------------------------------------
router.delete('/registro/:usuarioid', (req, res) => {
    let borrarRegistro = req.params.usuarioid;
    Usuarios.borrarUsuarioPorId(borrarRegistro, (err, registroBorrado) => {
        if(err){
            res.json({success:false, msg:'No se ha podido borrar registro'});
        } else {
            res.json({success:true, msg: registroBorrado});
        }
    });
})
//borrado de todos los usuarios.
//------------------------------------------
router.delete('/registro', (req, res) => {
    Usuarios.borrarTodos((err) => {
        if(err){
            res.json({success:false, msg:'No hay usuarios para borrarr'});
        } else {
            res.json({success:true, msg:'Todos los usuarios borrados'});
        }
    });
})
module.exports = router;