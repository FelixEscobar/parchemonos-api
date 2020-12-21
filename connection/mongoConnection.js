const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/parchemonos_db'
//const url = 'mongodb+srv://felesc:Fel12345@cluster0.uqngf.mongodb.net/parchemonos_db?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.set('useCreateIndex', true)
const db = mongoose.connection

db.on('error', () => console.error('Error con la conexión'))
db.once('open', () => console.log('Conexión establecida'))

module.exports = db 


