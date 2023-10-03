
const Pedido = require('../models/Pedido');
const DetallePedido = require('../models/DetallePedido');


const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los pedidos' });
    }
};


const obtenerDetallesPedido = async (req, res) => {
    const { idPedido } = req.params;
    try {
        const detalles = await DetallePedido.findAll({
            where: { pedido_id: idPedido },
        });
        res.json(detalles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los detalles del pedido' });
    }
};

const consultarPedidos = async (req, res) => {
    const { codigo, tipoDocumento, documentoCliente } = req.query;
    try {
        const pedidos = await Pedido.findAll({
            where: {
                codigo_pedido: codigo,
                tipo_documento: tipoDocumento,
                documento_cliente: documentoCliente,
            }
        });
        res.json(pedidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al realizar la consulta de pedidos' });
    }
};

module.exports = {
    obtenerPedidos,
    obtenerDetallesPedido,
    consultarPedidos,
}