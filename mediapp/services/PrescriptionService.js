import prescriptionRepository from "../repositories/PrescriptionRepository"

const getAllPrescriptions = async() => {
    return prescriptionRepository.getAllPrescriptions()
}

const getPrescription = async(id) => {
    return prescriptionRepository.getPrescription(id)
}

const savePrescription = async({date, appointmentId, medicine, dosage, instructions}) => {
    return prescriptionRepository.savePrescription({date, appointmentId, medicine, dosage, instructions})
}

const updatePrescription = async(id, {date, appointmentId, medicine, dosage, instructions}) => {
    return prescriptionRepository.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions})
}

const deletePrescription = async(id) => {
    return prescriptionRepository.deletePrescription(id)
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService