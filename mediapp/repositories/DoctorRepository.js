import Doctor from '../models/Doctor.js'

const getAllDoctors = async() => {
    return await Doctor.find()
}

const getDoctor = async(id) => {
    try {
        return await Doctor.findById(id)
    } catch (error) {
        throw new Error(error)
    }
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
    try {
        const doctor = new Doctor({
            name, 
            login,
            password,
            medicalSpecialty,
            medicalRegistry,
            email,
            phone
        })
        return await doctor.save()
    } catch (error) {
        throw new Error(error)
    }
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
    try {
        return await Doctor.findByIdAndUpdate(id, {
            name, 
            login,
            password,
            medicalSpecialty,
            medicalRegistry,
            email,
            phone
        }, {new: true})
    } catch (error) {
        throw new Error(error)
    }
}

const deleteDoctor = async(id) => {
    try {
        return await Doctor.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(error)
    }
}

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorRepository