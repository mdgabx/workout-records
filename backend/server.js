const express = require('express')
require('dotenv').config() // needed to use process.env

const app = express() // express app

// middleware to know what path and method is called
app.use((req, res, next) => {
    console.log(res.path, res.method)
    next()
})

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app!'})
})

const port = process.env.PORT

// listen for request
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})