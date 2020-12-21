const { insert, updateOne, remove, makeRate } = require('./../services/bookingService')

const createBooking = async (req, res) => {
    try {
        const bookingData = req.body
        const userId = req.payload.iduser
        const response = await insert(bookingData, idExperience, iduser)
        res.json(response)
} catch (error) {
    res.status(500).send(error)
}
}


const modifyBooking = async (req, res) => {
    try {
        const bookingData = req.body
        const response = await updateOne(bookingData)
        res.json(response)
} catch (error) {
res.status(500).send(error)
}
}

const deleteBooking = async (req, res) => {
    try {
        const bookingData = req.body
        const response = await remove(bookingData)
        res.json(response)
} catch (error) {
res.status(500).send(error)
}
}

const rate = async (req, res) => {
    try {
        const rateData = req.body
        const response = await makeRate(rateData)
        res.json(response)
} catch (error) {
res.status(500).send(error)
}
}

module.exports = {
    createBooking,
    modifyBooking,
    deleteBooking,
    rate   
}