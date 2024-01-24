import React from 'react'
import { Workout } from '../features/workouts/workoutSlice'

const CardDetails:React.FC<Workout> = ({ title, reps, load, createdAt }) => (
    <div className="shadow-md border w-full border-gray-200 p-7 bg-white rounded">
    <h2 className="text-sky-600 text-xl font-urbanist font-bold">{title}</h2>
    <p><strong>Reps:</strong> {reps}</p>
    <p><strong>Load:</strong> {load}</p>
    <p>{new Date(createdAt).toLocaleDateString()}</p>
  </div>
)

export default CardDetails
