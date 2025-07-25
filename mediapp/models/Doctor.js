import mongoose from "mongoose";

const Schema = mongoose.Schema

const DoctorSchema = new Schema({
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
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function(v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v)
            },
            message: props => `${props.value} This is not a correct phone number value, please use the following format: 99 91234-1234`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Doctor = mongoose.model('Doctor', DoctorSchema)

export default Doctor