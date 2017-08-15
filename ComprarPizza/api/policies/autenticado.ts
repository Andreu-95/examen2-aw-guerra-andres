/**
 * Created by poli_ on 14/8/2017.
 */
module.exports = function(req, res, next) {

  if (req.session.credencialSegura) {
    return next();
  }

  return res.forbidden('Usted no puede entrar a esta vista');
};
