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
    if (req.session.credencialSegura) {
      return res.view('vistas/logout');
    } else {
      return res.view('vistas/login');
    }
  },

  crearPizza: function (req, res) {
    return res.view('vistas/crearPizza', {
      id_user: req.session.credencialSegura.id
    });
  },

  listarPizzas: function (req, res) {
    Pizza.find({id_user: req.session.credencialSegura.id}).populate('ingredientes').exec(function (err, pizzasEncontradas) {
      if (err) {
        return res.view('vistas/error', {
          error: {
            descripcion: "Fallo al buscar Pizzas",
            rawError: err,
            url: "/Inicio"
          }
        });
      }
      return res.view('vistas/listarPizzas', {pizzas: pizzasEncontradas});
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
