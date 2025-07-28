const express = require('express');
const router = express.Router();
const Formulario = require('../models/Formulario');

router.post('/', async (req, res) => {
    try{
        const nuevoFormulario = new Formulario(req.body);
        await nuevoFormulario.save();
        res.status(201).json({ message: 'Formulario guardado con exito' });
    }catch(error) {
        console.error("Error al guardar el formulario:",error)
        res.status(500).json({ message: 'Error al guardar el formulario' });

    }
});

module.exports = router;