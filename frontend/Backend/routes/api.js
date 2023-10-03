const express = require('express');
const pedidoController = require('../controllers/pedidoController');
const Pedido = require('../models/Pedido'); 
const DetallePedido = require('../models/DetallePedido'); 
const router = express.Router();


router.get('/pedidos', pedidoController.obtenerPedidos);

router.get('/pedidos/:idPedido/detalles', pedidoController.obtenerDetallesPedido);

router.get('/consulta-pedidos', pedidoController.consultarPedidos);

module.exports = router;