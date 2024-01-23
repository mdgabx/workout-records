const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config() // needed to use process.env

const app = express() // express app

app.use(express.json())
app.use(cors())

// middleware to know what path and method is called
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

const port = process.env.PORT

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(port, () => {
            console.log(`Connected to db and listening on port: ${port}`)
        }) 
    })
    .catch((error) => {
        console.error(error)
    })

