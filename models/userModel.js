const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const UserSchema = new Schema({
name: String,
phone: String,
email: { type: String, unique: true, required: true},
password: String,
document: String,
})

const User = mongoose.model('user', UserSchema)

module.exports = User
