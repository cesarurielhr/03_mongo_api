const schoolRoutes = require('./Routes/schoolRoutes');
const materiasRoutes = require('./Routes/materiasRoutes');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // Middleware para permitir solicitudes de recursos cruzados
const logger = require("./Routes/logger");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/alumnos', schoolRoutes)
app.use('/materias',materiasRoutes);

app.get('/', (req, res, next) => {
    res.send(
        `<h1>API RESTFULL de Carrito de Compras</h1> <p> Leer: <a href="docs.com">api-tasks-docs</a> para mas información.</p>`
    );
})

app.use((req, res, next) => {
    res.status(404).json({ code: 404, message: 'Ruta no encontrada' });
});

const connectDB = require('./config/database.config.js');

dotenv.config();
PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});