/**
 * Created by poli_ on 14/8/2017.
 */
module.exports = function (req, res, next) {
    if (req.session.credencialSegura) {
        return next();
    }
    return res.view('vistas/error', {
        error: {
            descripcion: "Usted no puede entrar a esta Vista",
            rawError: "Ruta equivocada",
            url: "/Inicio"
        }
    });
};
