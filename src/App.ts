import express from 'express';
import mongoose from 'mongoose';
import appointmentRoutes from './routes/appointmentRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/turnero', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Rutas
app.use('/api', appointmentRoutes);

//Manejador de errores
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Manejador de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
