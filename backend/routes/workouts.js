const express = require('express')
const {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkout)

//GET a single workout
router.get('/:id', getSingleWorkout)

// Create a new workout
router.post('/', createWorkout)


//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router