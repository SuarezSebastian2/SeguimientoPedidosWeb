
const express = require('express');
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/api');

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
