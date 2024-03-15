import { Request, Response } from 'express';
import { Appointment } from '../models/appointmentModel';

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { name, date } = req.body;
        const appointment = new Appointment({ name, date });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};