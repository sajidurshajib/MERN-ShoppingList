const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const  items = require('./routes/api/items')


// Database
const deprecatedDB = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost/mearn_shopping',deprecatedDB)

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

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/items',items)


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
