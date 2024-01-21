const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()


// GET all workouts
router.get('/', async (req, res) => {

    try {
        const workout = await Workout.find({})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//GET a single workout
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const workout = await Workout.findById(id)

        if(!workout) {
            return res.status(404).json({ error: 'No workout found!' })
        }

        res.status(200).json(workout)

    } catch(error){
        res.status(400).json({error: error.message})
    }
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
})


//DELETE a workout
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const workout = await Workout.findByIdAndDelete(id)

        if(!workout) {
            return res.status(404).json({ error: 'No workout found!' })
        }

        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({ msg: 'DELETE a workouts' })
})


//UPDATE a workout
router.patch('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(id, {
            ...req.body
        }, {
            new: true
        })

        if(!updatedWorkout) {
            return res.status(404).json({ error: 'No updated workout found' })
        }

        res.status(200).json(updatedWorkout)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


module.exports = router