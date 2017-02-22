// importaciones y metodos http.
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
// Importamos el schema compilado de la base de datos.
const Usuarios = require('../models/usuarios');

//establecimiento de rutas asociadas a metodos http.
// METODOS CONCERNIENTES AL LOGGEO DE USUARIOS Y SU REGISTRO EN LA PLATAFORMA.

router.post('/registroPlataforma', (req, res) => {
    console.log('Metodo POST');
    let nuevoUsuarioPlataforma =  new Usuarios({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        correo: req.body.correo,
        password: req.body.password,
        direccion: req.body.direccion.split(',')
    });
    Usuarios.addUser(nuevoUsuarioPlataforma, (err, usuario) => {
        if(err){
            res.json({success:false, msg: "No se pudo añadir usuario"});
        } else {
            res.json({success: true, msg: usuario});
        }
    });
});

// METODOS CONCERNIENTES A LOS REGISTROS GUARDADOS.
//registro de usuario.
//--------------------------------------------
router.post('/usuarios/:usuarioid/registro', (req, res) => {
    // RECORDAR QUE REQ.PARAMS ES PARA LOS PARAMETRO DE LA RUTA INTRODUCIDA.
    let usuarioId = req.params.usuarioid;
    let nuevoRegistro = {
        curso: req.body.curso,
        horario: req.body.horario,
        instructor: req.body.instructor,
        partner: req.body.partner,
        observadores: req.body.observadores.split(','),
        informacionExtra: req.body.informacionExtra
    };
    if(usuarioId){
      Usuarios.findById(usuarioId)
      .select('asignaturasAlumno')
      .exec((err, usuario) => {
          if(err){
              res.json({success:false, msg: err});
          } else {
              Usuarios.addRegistro(usuario, nuevoRegistro);
              // buscamos el usuario completo para enviarlo en la resputa json con los datos de registro añadidos.
              Usuarios.find(usuarioId, (err, user) => {
                  if(err){
                      res.json({success:false, msg:'No encontre nada'});
                  } else {
                      res.json({success:true, msg: user});
                  }
              })
          }
      });
    }
});
//obtencion de un usuario.
//--------------------------------------------
router.get('/usuarios/:usuarioid/:registroid', (req, res) => {
    let registroId = req.params.registroid;
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
router.delete('/usuarios/registro/:registroid', (req, res) => {
    let borrarRegistro = req.params.registroid;
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
router.delete('/usuarios/registro', (req, res) => {
    Usuarios.borrarTodos((err) => {
        if(err){
            res.json({success:false, msg:'No hay usuarios para borrarr'});
        } else {
            res.json({success:true, msg:'Todos los usuarios borrados'});
        }
    });
});

module.exports = router;