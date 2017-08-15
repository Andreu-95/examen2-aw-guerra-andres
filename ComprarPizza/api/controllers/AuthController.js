/**
 * Created by poli_ on 14/8/2017.
 */
var Passwords = require('machinepack-passwords');
module.exports = {
    Login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({
                correo: parametros.correo
            }).exec(function (err, usuarioEncontrado) {
                if (err) {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "Hubo un problema en el login",
                            rawError: err,
                            url: "/Login"
                        }
                    });
                }
                if (usuarioEncontrado) {
                    Passwords.checkPassword({
                        passwordAttempt: parametros.password,
                        encryptedPassword: usuarioEncontrado.password,
                    }).exec({
                        error: function (err) {
                            return res.view('vistas/error', {
                                error: {
                                    descripcion: "Hubo un problema en el login",
                                    rawError: err,
                                    url: "/Login"
                                }
                            });
                        },
                        incorrect: function () {
                            return res.view('vistas/error', {
                                error: {
                                    descripcion: "El password es incorrecto",
                                    rawError: "Password Incorrecto",
                                    url: "/Login"
                                }
                            });
                        },
                        success: function () {
                            req.session.credencialSegura = usuarioEncontrado;
                            return res.view('vistas/home');
                        },
                    });
                }
                else {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "Necesitamos un usuario con el correo: " + parametros.correo,
                            rawError: "No existe",
                            url: "/Login"
                        }
                    });
                }
            });
        }
        else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "Necesitamos su correo y password",
                    rawError: "No envía Parámetros",
                    url: "/Login"
                }
            });
        }
    },
    TieneSesion: function (req, res) {
        if (req.session.credencialSegura) {
            return res.ok("Si tiene la credencial segura");
        }
        else {
            return res.forbidden();
        }
    },
    Logout: function (req, res) {
        req.session.credencialSegura = undefined;
        return res.view('vistas/login');
    }
};
