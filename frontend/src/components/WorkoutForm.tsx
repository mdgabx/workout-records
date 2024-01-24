import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { createWorkout } from '../features/workouts/workoutSlice'
import { RootState } from '../app/store'


const WorkoutForm:React.FC = () => {
  const dispatch = useAppDispatch()
  const workouts = useAppSelector((state: RootState) => state.workout.workouts)

  const [formData, setFormData] = useState({
    title: '',
    reps: 0,
    load: 0,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.name === 'title' ? event.target.value : parseInt(event.target.value)

    setFormData({
        ...formData,
        [event.target.name]: value
    })
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(createWorkout(formData))
  }

  useEffect(() => {
    setFormData({
      title: '',
      reps: 0,
      load: 0,
    });
  }, [workouts]);



  return (
    <div className='w-5/12 container my-10'>
        <form className="flex flex-col items-start justify-center p-10 gap-4 bg-white shadow border-gray-200 rounded-md">
            <h3 className='text-3xl'>Record a workout</h3>

            <label>Exercise Title:</label>
            <input 
                type='text'
                name='title'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                onChange={handleChange}
                value={formData.title}

            />

            <label>Load (in kg):</label>
            <input 
                type='number'
                name='load'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                onChange={handleChange}
                value={formData.load}
            />

            <label>Reps:</label>
            <input 
                type='number'
                name='reps'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                onChange={handleChange}
                value={formData.reps}
            />
            <button 
            className='mx-auto rounded-lg py-2 px-4 bg-green-700 text-white shadow hover:bg-white hover:text-black'
            onClick={handleSubmit}
            >
                ADD
            </button>
        </form>
    </div>
  )
}

export default WorkoutForm
