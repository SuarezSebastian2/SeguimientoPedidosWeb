import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, InputLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function ConsultaPedido({ setPedidoData }) {
    const theme = useTheme();
    const [codigoPedido, setCodigoPedido] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [documentoCliente, setDocumentoCliente] = useState('');
    const [pedidosData, setPedidosData] = useState([]);
    const [detallesPedido, setDetallesPedido] = useState([]);
    const [mensajeError, setMensajeError] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [codigoPedidoEmpty, setCodigoPedidoEmpty] = useState(false);
    const [tipoDocumentoEmpty, setTipoDocumentoEmpty] = useState(false);
    const [documentoClienteEmpty, setDocumentoClienteEmpty] = useState(false);

    const handleConsultar = () => {
        if (!codigoPedido || !tipoDocumento || !documentoCliente) {
            setMensajeError('Por favor, completa todos los campos.');
            setCodigoPedidoEmpty(!codigoPedido);
            setTipoDocumentoEmpty(!tipoDocumento);
            setDocumentoClienteEmpty(!documentoCliente);
            return;
        }

        fetch(`http://localhost:3001/api/pedidos?codigoPedido=${codigoPedido}&tipoDocumento=${tipoDocumento}&documentoCliente=${documentoCliente}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    console.log('data ', data);
                    const pedidoEncontrado = data.find(pedido => pedido.codigo_pedido === codigoPedido);

                    if (pedidoEncontrado) {
                        if (tipoDocumento !== pedidoEncontrado.tipo_documento || documentoCliente !== pedidoEncontrado.documento_cliente) {
                            setMensajeError('Los datos ingresados no coinciden con el pedido encontrado.');
                            return;
                        }

                        setPedidosData([pedidoEncontrado]);
                        setMensajeError('');
                        setMostrarFormulario(false);
                        fetch(`http://localhost:3001/api/pedidos/${pedidoEncontrado.id}/detalles`)
                            .then(response => response.json())
                            .then(detalles => {
                                setDetallesPedido(detalles);
                            })
                            .catch(error => console.error(error));
                    } else {
                        setPedidosData([]);
                        setDetallesPedido([]);
                        setMensajeError('Pedido inexistente o código de pedido inexistente');
                    }
                } else {
                    setPedidosData([]);
                    setDetallesPedido([]);
                    setMensajeError('Pedido inexistente o código de pedido inexistente');
                }
            })
            .catch(error => console.error(error));
    };

    const handleCerrar = () => {
        setPedidosData([]);
        setDetallesPedido([]);
        setMensajeError('');
        setMostrarFormulario(true);
    };

    const handleNuevaConsulta = () => {
        setPedidosData([]);
        setDetallesPedido([]);
        setMensajeError('');
        setPedidoData(null);
        setMostrarFormulario(true);
    };

    const getColorByEstado = (estado) => {
        switch (estado) {
            case 'Entregado':
                return 'green';
            case 'En proceso':
                return 'orange';
            case 'Pendiente':
                return 'red';
            default:
                return 'default';
        }
    };

    return (
        <div>
            {mostrarFormulario && (
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" style={{ fontSize: '35px', fontWeight: 'bold', marginTop: '10%' }}>
                            Consulta de Pedido
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={theme.palette.mode === 'dark' ? 0 : 10} style={{ padding: '19px', maxWidth: '400px', margin: '0 auto' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        style={{ maxWidth: '100%', margin: '0 auto' }}
                                        label="Código de Pedido "
                                        variant="outlined"
                                        fullWidth
                                        value={codigoPedido}
                                        onChange={(e) => {
                                            setCodigoPedidoEmpty(!e.target.value);
                                            setCodigoPedido(e.target.value.toUpperCase());
                                        }}
                                        required
                                        error={codigoPedidoEmpty}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel id="tipoDocumento-label">Tipo de Documento</InputLabel>
                                    <Select
                                        labelId="tipoDocumento-label"
                                        variant="outlined"
                                        fullWidth
                                        value={tipoDocumento}
                                        onChange={(e) => {
                                            setTipoDocumentoEmpty(!e.target.value);
                                            setTipoDocumento(e.target.value);
                                        }}
                                        required
                                        error={tipoDocumentoEmpty}
                                    >
                                        <MenuItem value="DNI">DNI</MenuItem>
                                        <MenuItem value="RUC">RUC</MenuItem>
                                        <MenuItem value="CC">CC</MenuItem>
                                        <MenuItem value="CE">CE</MenuItem>
                                        <MenuItem value="TI">TI</MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Documento Cliente"
                                        variant="outlined"
                                        fullWidth
                                        value={documentoCliente}
                                        onChange={(e) => {
                                            setDocumentoClienteEmpty(!e.target.value);
                                            const inputValue = e.target.value.replace(/\D/g, '');
                                            setDocumentoCliente(inputValue);
                                        }}
                                        required
                                        error={documentoClienteEmpty}
                                    />
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" onClick={handleConsultar} style={{ marginTop: '16px', width: '100%' }}>
                                Consultar
                            </Button>
                            {mensajeError && (
                                <Typography variant="body1" color="error" align="center" style={{ marginTop: '16px' }}>
                                    {mensajeError}
                                </Typography>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            )}

            {pedidosData.length > 0 && (
                <div>
                    <Typography variant="h5" align="center" style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '3%' }}>
                        Detalle del Pedido
                    </Typography>
                    <Paper elevation={12} style={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ position: 'relative' }}>
                            <Typography variant="body1" style={{
                                fontSize: '75%',
                                fontWeight: 'bold',
                                position: 'absolute',
                                top: '1px',
                                right: '4px',
                            }}>Estado del pedido: </Typography>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: getColorByEstado(pedidosData[0].estado_pedido),
                                    pointerEvents: 'none',
                                    fontSize: '75%',
                                    fontWeight: 'bold',
                                    position: 'absolute',
                                    top: '20px',
                                    right: '3px',
                                }}>
                                {pedidosData[0].estado_pedido}
                            </Button>
                        </div>
                        <Typography variant="h6" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '1%' }}>Código de Pedido: {pedidosData[0].codigo_pedido}</Typography>
                        <Typography variant="body1" style={{ fontSize: '18px' }}>Nombre de Cliente:  {pedidosData[0].nombre_cliente}</Typography>
                        <Typography variant="body1" style={{ fontSize: '18px' }}>Documento del cliente:  {pedidosData[0].documento_cliente}</Typography>
                        <Typography variant="body1" style={{ fontSize: '18px' }}>Direccion de entrega:  {pedidosData[0].direccion_entrega}</Typography>
                        <Typography variant="body1" style={{ fontSize: '18px' }}>Fecha Estimada de Entrega:  {pedidosData[0].fecha_estimada_entrega}</Typography>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '3%', marginBottom: '0' }}>Detalle de Productos</h3>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Producto</TableCell>
                                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Cantidad</TableCell>
                                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Precio</TableCell>
                                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {detallesPedido.length > 0 && detallesPedido.map((detalle, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{detalle.producto}</TableCell>
                                            <TableCell>{detalle.cantidad}</TableCell>
                                            <TableCell>{detalle.precio}</TableCell>
                                            <TableCell>{(detalle.cantidad * detalle.precio).toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={3} style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'right' }}>Total:</TableCell>
                                        <TableCell style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                            {detallesPedido.reduce((total, detalle) => total + detalle.cantidad * detalle.precio, 0).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <div style={{ marginTop: '1px', display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" color="primary" onClick={handleCerrar}>
                                Cerrar
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNuevaConsulta}>
                                Nueva Consulta
                            </Button>
                        </div>
                    </Paper>
                </div>
            )}
        </div>
    );
}

export default ConsultaPedido;
