import mongoose from "mongoose";

const Schema = mongoose.Schema

const PacientSchema = new Schema({
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
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'phone number is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Pacient = mongoose.model('Pacient', PacientSchema)

export default Pacient