import { mongoose } from "mongoose";

const Schema = mongoose.Schema()

const AppointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required']
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient Id is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const appointment = mongoose.model('Appointment', AppointmentSchema)

export default appointment