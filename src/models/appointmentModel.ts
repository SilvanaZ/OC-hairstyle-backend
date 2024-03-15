import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
    name: string;
    date: Date;
}

const appointmentSchema: Schema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    // Definir otros campos aquí
});

export const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);
