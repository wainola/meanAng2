// importaciones y metodos http.
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
// Importamos el schema compilado de la base de datos.
const Usuarios = require('../models/usuarios');

//establecimiento de rutas asociadas a metodos http.

// registro de usuario para login.

router.post('/registroPlataforma', (req, res) => {
    console.log('Metodo POST');
    let nuevoUsuarioPlataforma =  new Usuarios({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        correo: req.body.correo,
        password: req.body.password,
        direccion: req.body.direccion
    });
    Usuarios.addUser(nuevoUsuarioPlataforma, (err, usuario) => {
        if(err){
            res.json({success:false, msg: "No se pudo añadir usuario"});
        } else {
            res.json({success: true, msg: "usuario registrado exitosamente"});
        }
    });
});

// METODOS CONCERNIENTES A LOS REGISTROS GUARDADOS.
//registro de asignaturas.
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
          } if(!usuario){
              res.json({success:false, msg: 'No hay usuario con ese id'});
          } else {
              Usuarios.addRegistro(usuario, nuevoRegistro);
              res.json({success: true, msg:'Registro añadido exitosamente'});
          }
      });
    }
});
// obtencion de varios usuarios.
router.get('/usuarios', (req, res) => {
    Usuarios.find((err, usuarios) => {
        if(err){
            res.json({success:false, msg: err});
        }else{
            res.json({success:true, msg:usuarios});
        }
    })
});
//obtencion de un usuario.
//--------------------------------------------
router.get('/usuarios/:usuarioid', (req, res) => {
    let usuarioId = req.params.usuarioid;
    Usuarios.getUsuarioPorId(usuarioId, (err, usuario) => {
        if(err || usuario === null){
            res.json({success:false, msg: 'Usuario no encontrado'});
        } else {
            console.log('Registro encontrado');
            res.json({success: true, msg: usuario});
        }
    });
});
//borrado de un usuario.
//------------------------------------------
router.delete('/usuarios/:usuarioid', (req, res) => {
    let borrarUser = req.params.usuarioid;
    Usuarios.borrarUsuarioPorId(borrarUser, (err, userBorrado) => {
        if(err){
            res.json({success:false, msg:'No se ha podido borrar registro'});
        } else {
            res.json({success:true, msg: userBorrado});
        }
    });
})
//borrado de todos los usuarios.
//------------------------------------------
router.delete('/usuarios', (req, res) => {
    Usuarios.borrarTodos((err) => {
        if(err){
            res.json({success:false, msg:'No hay usuarios para borrarr'});
        } else {
            res.json({success:true, msg:'Todos los usuarios borrados'});
        }
    });
});

// borrado de asignaturas.
router.delete('/usuarios/:usuarioid/registro/:registroid', (req, res) => {
    let usuarioId = req.params.usuarioid;
    let registroId = req.params.registroid;
    Usuarios.borraRegistroAsignaturas(usuarioId, registroId, res)
});

// metodo de autenticacion que se lleva a cabo en el cliente con angular.

router.post('/autenticacion', (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    console.log(`
    El usuario ingresado es ${usuario}.
    La contraseña ingresada es ${password}.
    `);
    // Debemos obtener el usuario desde la DB.
    // luego comparar contraseñas.
    Usuarios.getUsuarioPorNombre(usuario, (err, usuario) => {
        if(err) throw err;
        if(!usuario){
            console.log("no encontre usuario!");
            return res.json({success: false, msg: "Usuario no encontrado"});
        }
        
        // comparamos la contraseña recibida, con la contraseña almacenada en el registro.
        Usuarios.comparacionPassword(password, usuario.password, (err, todoCalza) => {
            if (err) throw err;
            if(todoCalza){
                // creacion del token.
                const token = jwt.sign(usuario, config.secret, {
                    expiresIn: 86400
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    usuario: {
                        id: usuario._id,
                        nombre: usuario.nombre,
                        usuario: usuario.usuario,
                        email: usuario.correo
                    }
                });
            } else {
                return res.json({success: false, msg: "Contraseña Equivocada"});
            }
        });

    });
});

module.exports = router;