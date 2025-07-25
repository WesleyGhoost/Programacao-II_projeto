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
        required: [true, 'phone number is required'],
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

const Pacient = mongoose.model('Pacient', PacientSchema)

export default Pacient