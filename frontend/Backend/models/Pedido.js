const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize'); // Importa la instancia de Sequelize

const Pedido = sequelize.define('Pedido', {
    codigo_pedido: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'codigo_pedido'
    },
    tipo_documento: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'tipo_documento'
    },
    nombre_cliente: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'nombre_cliente'
    },
    documento_cliente: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'documento_cliente'
    },
    direccion_entrega: {
        type: Sequelize.STRING(20),
        allowNull: false,
        field: 'direccion_entrega'
    },
    estado_pedido: {
        type: Sequelize.STRING(20),
        field: 'estado_pedido'
    },
    fecha_estimada_entrega: {
        type: Sequelize.DATE,
        field: 'fecha_estimada_entrega'
    }
}, {
    tableName: 'pedidos',
    timestamps: false
});

module.exports = Pedido;