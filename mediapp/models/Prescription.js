import mongoose from "mongoose"

const Schema = mongoose.Schema

const PrescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [false]
    },
    appointmentId: {
        type: String,
        required: [true, 'Appointment ID is required']
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}) 

const Prescription = mongoose.model('Prescription', PrescriptionSchema)

export default Prescription