const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')

// Database
const deprecatedDB = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true
}
mongoose.connect(config.get('mongoURI'),deprecatedDB)

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database connection established')
})



//Express
const app = express()

//Middleware
app.use(morgan('dev'))
app.use(cors())

app.use(express.json())

app.use('/api/items',require('./routes/api/items'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))


// Main route
app.get('/',(req,res,next)=>{
    res.json({
        message:"Main route MERN shopping list"
    })
})


// Run server
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
