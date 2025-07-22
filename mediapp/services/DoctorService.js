import doctorRepository from "../repositories/DoctorRepository"

const getAllDoctors = async() => {
    return doctorRepository.getAllDoctors()
}

const getDoctor = async(id) => {
    return doctorRepository.getDoctor(id)
}

const saveDoctor = async({
    doctorId, 
    name, 
    login,
    password,
    medicalSpecialty,
    medicalRegistry,
    email,
    phone
}) => {
    return doctorRepository.saveDoctor({
        doctorId, 
        name, 
        login,
        password,
        medicalSpecialty,
        medicalRegistry,
        email,
        phone
    })
}

const updateDoctor = async(id, {
    doctorId, 
    name, 
    login,
    password,
    medicalSpecialty,
    medicalRegistry,
    email,
    phone
}) => {
    return doctorRepository.updateDoctor(id, {
        doctorId, 
        name, 
        login,
        password,
        medicalSpecialty,
        medicalRegistry,
        email,
        phone
    })
}

const deleteDoctor = async(id) => {
    return doctorRepository.deleteDoctor(id)
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService