const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize'); 

const DetallePedido = sequelize.define('DetallePedido', {
    producto: {
        type: Sequelize.STRING(255)
    },
    cantidad: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.DECIMAL(10, 2)
    }
}, {
    tableName: 'detalles_pedidos',
    timestamps: false 
});

module.exports = DetallePedido;