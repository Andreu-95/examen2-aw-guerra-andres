/**
 * Created by poli_ on 14/8/2017.
 */
module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      enum: ['Masa Gruesa', 'Masa Fina', 'Jamón', 'Pepperoni', 'Tocino'],
      required: true
    },

    id_pizza: {
      model: 'pizza'
    }
  }

};
