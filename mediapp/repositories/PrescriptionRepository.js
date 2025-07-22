import prescription from '../models/Prescription'

const getAllPrescriptions = async() => {
    return await prescription.find()
}

const getPrescription = async(id) => {
    try {
        return await appointment.findById(id)
    } catch (error) {
        throw new Error(error)
    }
}

const savePrescription = async({date, appointmentId, medicine, dosage, instructions}) => {
    try {
        const prescription = new prescription({date, appointmentId, medicine, dosage, instructions})
        return await prescription.save()
    } catch (error) {
        throw new Error(error)
    }
}

const updatePrescription = async(id, {date, appointmentId, medicine, dosage, instructions}) => {
    try {
        return await prescription.findByIdAndUpdate(id, 
            {date, appointmentId, medicine, dosage, instructions}, 
            {new: true})
    } catch (error) {
        throw new Error(error)
    }
}

const deletePrescription = async(id) => {
    try {
        return await prescription.findByIdAndUpdate(id)
    } catch (error) {
        throw new Error(error)
    }
}

const prescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionRepository