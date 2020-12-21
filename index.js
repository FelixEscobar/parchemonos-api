const express = require('express')
const app = express()
//require ('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
const PORT = process.env.PORT || 3000

// mongo connection
require ('./connection/mongoConnection')


//mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds241658.mlab.com:41658/test_db`,(err)=>{
//if(err) throw err;
//console.log("DB Connected Successfully");
//});
//const PORT = 4000;
//app.listen(PORT,()=>{
//console.log(`Server Running on port ${PORT}`);
//});

const experiencesRoutes = require('./routes/experiences')
app.use('/experiences', experiencesRoutes) 

const bookingRoutes = require('./routes/booking')
app.use('/booking', bookingRoutes) 

const usersRoutes = require('./routes/users')
app.use('/users',usersRoutes)

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})