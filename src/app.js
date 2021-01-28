const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//Routes
app.use('/api/users', require('./routes/user.routes'))

app.get('/', (req,res)=>{
  res.json({
    msg: "Welcome a E-Commerce REST API"
  })
})

module.exports = app