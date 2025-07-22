import doctor from '../models/Doctor'

const getAllDoctors = async() => {
    return await doctor.find()
}

const getDoctor = async(id) => {
    try {
        return await doctor.findById(id)
    } catch (error) {
        throw new Error(error)
    }
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
    try {
        const doctor = new doctor({
            doctorId, 
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
    doctorId, 
    name, 
    login,
    password,
    medicalSpecialty,
    medicalRegistry,
    email,
    phone
    }) => {
    try {
        return await doctor.findByIdAndUpdate(id, {
            doctorId, 
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
        return await doctor.findByIdAndUpdate(id)
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