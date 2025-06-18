// importacion del paquete de express
const express = require("express");
// importacion del paquete de cors
const cors = require("cors");
// conexion de la base de datos
const {ConnectDB} = require("./data/config");
// importacion de las rutas
const userRouter = require("./routes/serviceRoutes");
// Importacion dotenv
require("dotenv").config();

// CAMBIO IMPORTANTE: Puerto dinámico para Railway
const PORT = process.env.PORT || 3008;

// Creacion de la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba (NUEVA)
app.get('/', (req, res) => {
    res.json({ 
        message: 'API de Servicios funcionando correctamente',
        version: '1.0.0',
        endpoints: {
            servicios: '/api-3-services/services'
        }
    });
});

app.use('/api-3-services', userRouter);

// Agregar la conexion a la base de datos
ConnectDB();

// CAMBIO IMPORTANTE: Escuchar en todas las interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
