// TODO: create, update, romoved
const BookingModel = require('./../models/bookingModel')

const insert = async (bookingData) => {
    try {
        const booking = await BookingModel(bookingData).save()
        return { status: 1, booking }
    } catch (error) {
     throw (error)
    }
}

const updateOne = async (idExperience, rate, idUser) => {
    try {
        const rate = await BookingModel(idExperience,rate, idUser).save()
        return { status: 1, rate: {} }
    } catch (error) {
     throw error
}
}

const remove = async (idExperience, rate, idUser) => {
    try {
        const rate = await BookingModel(idExperience,rate, idUser).save()
        return { status: 1, rate: {} }
    } catch (error) {
     throw error
}
}

const makeRate = async (idExperience, rate, idUser) => {
    try {
        const rate = await BookingModel(idExperience,rate, idUser).save()
        return { status: 1, rate: {} }
    } catch (error) {
     throw error
}
}

module.exports = {
    insert,
    updateOne,
    remove,
    makeRate
}