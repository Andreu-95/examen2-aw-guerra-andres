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
    crearPizza: function (req, res) {
        return res.view('vistas/crearPizza');
    },
};
