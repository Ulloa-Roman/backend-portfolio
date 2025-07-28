const express = require('express');
const router = express.Router();
const { enviarFormulario } = require('../controllers/formController');

// Ruta para enviar el formulario
router.post('/', enviarFormulario);

module.exports = router;