const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/form', formRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB!');
        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al conectar a MongoDB:', error);
    });

const formularioRoutes = require('./routes/formulario');
app.use('/api/formulario', formularioRoutes);