module.exports = {
    CrearUsuario: function (req, res) {
        if (req.method == 'POST') {
            var parametros = req.allParams();
            if (parametros.nombres && parametros.apellidos && parametros.correo && parametros.password) {
                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo,
                    password: parametros.password
                };
                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.view('vistas/error', {
                            error: {
                                descripcion: "Fallo al crear el Usuario",
                                rawError: err,
                                url: "/CrearUsuario"
                            }
                        });
                    }
                    return res.view('vistas/login');
                });
            }
            else {
                return res.view('vistas/error', {
                    error: {
                        descripcion: "No se completaron todos los campos",
                        rawError: "Campos Incompletos",
                        url: "/CrearUsuario"
                    }
                });
            }
        }
        else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "Error en el método HTTP",
                    rawError: "Método Inválido",
                    url: "/CrearUsuario"
                }
            });
        }
    }
};
