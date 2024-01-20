const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    
    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        })

        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.json({ msg: 'POST a new workouts' })
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