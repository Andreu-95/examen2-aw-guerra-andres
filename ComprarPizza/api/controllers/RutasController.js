/**
 * Created by poli_ on 14/8/2017.
 */
module.exports = {
    home: function (req, res) {
        return res.view('vistas/home');
    },
    crearUsuario: function (req, res) {
        return res.view('vistas/crearUsuario');
    },
    login: function (req, res) {
        return res.view('vistas/login');
    },
    crearPizza: function (req, res) {
        return res.view('vistas/crearPizza', {
            id_user: req.session.credencialSegura.id
        });
    },
    error: function (req, res) {
        return res.view('vistas/error', {
            error: {
                descripcion: "Usted está por error en esta Ruta, diríjase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    }
};
