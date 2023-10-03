

import React from 'react';

function DetallePedido({ pedidoData, setPedidoData }) {
    if (!pedidoData) {
        return null;
    }

    return (
        <div>
            <h2>Detalle del Pedido</h2>
            <p>Código de Pedido: {pedidoData.codigo_pedido}</p>
            <h3>Detalle de Productos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidoData.detalles.map((detalle, index) => (
                        <tr key={index}>
                            <td>{detalle.producto}</td>
                            <td>{detalle.cantidad}</td>
                            <td>{detalle.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Estado del Pedido: {pedidoData.estado_pedido}</p>
            <p>Fecha Estimada de Entrega: {pedidoData.fecha_estimada_entrega}</p>
            <button onClick={() => setPedidoData(null)}>Cerrar</button>
        </div>
    );
}

export default DetallePedido;
