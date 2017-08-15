module.exports = {
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        tipo: {
            type: 'string',
            enum: ['Familiar', 'Mediana', 'Personal'],
            required: true
        },
        precio: {
            type: 'float',
            required: true
        },
        ingredientes: {
            collection: 'ingrediente',
            via: 'id_pizza'
        },
        id_user: {
            model: 'usuario'
        }
    },
    afterDestroy: function (destroyedRecords, cb) {
        Ingrediente.destroy({
            id_pizza: _.pluck(destroyedRecords, 'id')
        }).exec(cb);
    }
};
