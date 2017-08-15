/**
 * Created by poli_ on 14/8/2017.
 */
module.exports = {
    attributes: {
        nombre: {
            type: 'string',
            enum: ['Masa Gruesa', 'Masa Delgada', 'Jamón', 'Pepperoni', 'Tocino'],
            unique: true,
            required: true
        },
        id_pizza: {
            model: 'pizza'
        }
    }
};
