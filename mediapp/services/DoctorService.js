import doctorRepository from "../repositories/DoctorRepository.js"

const getAllDoctors = async() => {
    return doctorRepository.getAllDoctors()
}

const getDoctor = async(id) => {
    return doctorRepository.getDoctor(id)
}

const saveDoctor = async({
    name, 
    login,
    password,
    medicalSpecialty,
    medicalRegistry,
    email,
    phone
}) => {
    return doctorRepository.saveDoctor({
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
    name, 
    login,
    password,
    medicalSpecialty,
    medicalRegistry,
    email,
    phone
}) => {
    return doctorRepository.updateDoctor(id, {
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

const getDoctorByLogin = async(login) => {
    return doctorRepository.getDoctorByLogin(login)
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorService