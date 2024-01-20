const express = require('express')
const workoutRoutes = require('./routes/workouts')


require('dotenv').config() // needed to use process.env

const app = express() // express app

app.use(express.json())

// middleware to know what path and method is called
app.use((req, res, next) => {
    console.log(res.path, res.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

const port = process.env.PORT

// listen for request
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}) 