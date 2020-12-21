const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
user_id: String,
experience_id: String,
bookingdate: Date,
comments: String,
//rate : {
//    score: Number,
//    comments: String
//}
})

const BookingModel = mongoose.model('booking', BookingSchema)

module.exports = BookingModel