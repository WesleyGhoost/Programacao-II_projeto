import { mongoose } from "mongoose";

const Schema = mongoose.Schema()

const DoctorSchema = new Schema({
    doctorId: {
        type: String,
        required: [true, 'DoctorId is required']
    },
    name: {
        type: String,
        required: [true, 'Doctor name is required']
    },
    login: {
        type: String,
        required: [true, 'Login is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    medicalSpecialty: {
        type: String,
        required: [true, 'Medical Specialty is required']
    },
    medicalRegistry: {
        type: String,
        required: [true, 'Medical Registry is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const doctor = mongoose.model('Doctor', DoctorSchema)

export default doctor