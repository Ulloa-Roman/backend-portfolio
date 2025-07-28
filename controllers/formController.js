const FormData = require('../models/formData');

const enviarFormulario = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const nuevoDato = new FormData({ name, email, message });
    await nuevoDato.save();
    res.status(201).json({ message: 'Formulario enviado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el formulario' });
  }
};

module.exports = {enviarFormulario};