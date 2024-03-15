import { Router } from 'express';
import { getAllAppointments, createAppointment} from '../controllers/appointmentController';

const router = Router();

router.get('/appointments', getAllAppointments);
router.post('/appointments', createAppointment);

export default router;
