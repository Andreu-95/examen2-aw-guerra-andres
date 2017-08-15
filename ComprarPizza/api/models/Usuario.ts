/**
 * Created by poli_ on 14/8/2017.
 */
declare let module;
declare let require;
declare let Pizza;
declare let _;

var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
    nombres: {
      type: 'string',
      minLength: 5,
      required: true
    },

    apellidos: {
      type: 'string',
      minLength: 5,
      required: true
    },

    correo: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      defaultsTo: '123456'
    },

    pizzas: {
      collection: 'pizza',
      via: 'id_user'
    }
  },

  beforeCreate: function (values, cb) {
    Passwords.encryptPassword({
      password: values.password
    }).exec({
      error: function (err) {
        cb(err);
      },
      success: function (result) {
        values.password = result;
        cb();
      }
    })
  },

  beforeUpdate: function (values, cb) {
    if (values.password) {
      Passwords.encryptPassword({
        password: values.password
      }).exec({
        error: function (err) {
          cb(err);
        },
        success: function (result) {
          values.password = result;
          cb();
        }
      })
    } else {
      cb();
    }
  },

  afterDestroy: function (destroyedRecords, cb) {
    Pizza.destroy({
      id_user: _.pluck(destroyedRecords, 'id')
    }).exec(cb)
  }

};
