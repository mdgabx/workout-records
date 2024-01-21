const Workout = require('../models/workoutModel')

// get all workout records

const getAllWorkout = async (req, res) => {

    try {
        const workout = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// get a single workout record

const getSingleWorkout = async (req, res) => {
    const { id } = req.params

    try {
        const workout = await Workout.findById(id)

        if(!workout) {
            return res.status(404).json({ error: 'No workout found!' })
        }

        res.status(200).json(workout)

    } catch(error){
        res.status(400).json({error: 'Internal Server Error'})
        console.error(error.message)
    }
}

// create a workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
        
    try {
        const workout = await Workout.create({
            title,
            load,
            reps
        })

        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: 'Internal Server Error'})
        console.error(error.message)
    }
}

// delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    try {
        const workout = await Workout.findByIdAndDelete(id)

        if(!workout) {
            return res.status(404).json({ error: 'No workout found!' })
        }

        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: 'Internal Server Error'})
        console.error(error.message)
    }
}


// update a workout

const updateWorkout =  async (req, res) => {

    const { id } = req.params

    try {

        // Validate input data
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'No data provided for update' });
        }

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
        res.status(400).json({error: 'Internal Server Error'})
        console.error(error.message)
    }
}

module.exports = {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}