import mongoose from "mongoose";

const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required'],
        validate: {
            validator: function(v) {
                const id = new mongoose.Types.ObjectId(v)
                return Doctor.exists({_id: id})
            },
            message: props => `Doctor ${props.value} not found`
        }
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient Id is required'],
        validate: {
            validator: function(v) {
                const id = new mongoose.Types.ObjectId(v)
                return Pacient.exists({_id: id})
            },
            message: props => `Pacient ${props.value} not found`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment