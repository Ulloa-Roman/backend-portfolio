import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Ubico los middlewares para manejar CORS y JSON

app.use(cors());
app.use(express.json());

// Establezco las rutas basicas

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

//Conecto MongoDB

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB!');
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
.catch(error  => {
  console.error('Error al conectar a MongoDB:', error);
});