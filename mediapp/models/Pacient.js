import mongoose from "mongoose";

const Schema = mongoose.Schema

const PacientSchema = new Schema({
    pacientId: {
        type: String,
        required: [true, 'Pacient ID is required']
    },
    name: {
        type: String,
        required: [true, 'Pacient name is required']
    },
    birthDate: {
        type: Date,
        required: [true, 'birthday date is required']
    },
    email: {
        type: String,
        required: [false]
    },
    phone: {
        type: Number,
        required: [true, 'phone number is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Pacient = mongoose.model('Pacient', PacientSchema)

export default Pacient