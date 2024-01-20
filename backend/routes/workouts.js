const express = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' })
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET single workouts' })
})


// Create a new workout
router.post('/', (req, res) => {
    res.json({ msg: 'POST a new workouts' })
})


//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a workouts' })
})


//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a workout' })
})


module.exports = router