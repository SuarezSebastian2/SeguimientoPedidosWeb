const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pedidos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    
});

module.exports = sequelize;
