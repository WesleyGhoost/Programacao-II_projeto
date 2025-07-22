import pacient from '../models/Pacient'

const getAllPacients = async() => {
    return await pacient.find()
}

const getPacient = async(id) => {
    try {
        return await pacient.findById(id)
    } catch (error) {
        throw new Error(error)
    }
}

const savePacient = async({name, birthDate, email, phone}) => {
    try {
        const pacient = new pacient({name, birthDate, email, phone})
        return await pacient.save()
    } catch (error) {
        throw new Error(error)
    }
}

const updatePacient = async(id, {name, birthDate, email, phone}) => {
    try {
        return await pacient.findByIdAndUpdate(id, {name, birthDate, email, phone}, {new: true})
    } catch (error) {
        throw new Error(error)
    }
}

const deletePacient = async(id) => {
    try {
        return await pacient.findByIdAndUpdate(id)
    } catch (error) {
        throw new Error(error)
    }
}

const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientRepository