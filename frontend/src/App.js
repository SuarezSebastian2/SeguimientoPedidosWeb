import React, { useState } from 'react';
import ConsultaPedido from './components/ConsultaPedidos';
import DetallePedido from './components/DetallesEnvio';
import ThemeToggle from './components/ThemeToggle'; 

function App() {
  const [pedidoData, setPedidoData] = useState(null);

  return (
    <div>
      <ThemeToggle /> 
      {pedidoData ? (
        <DetallePedido pedidoData={pedidoData} setPedidoData={setPedidoData} />
      ) : (
        <ConsultaPedido setPedidoData={setPedidoData} />
      )}
    </div>
  );
}

export default App;
