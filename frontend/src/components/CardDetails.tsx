import React from 'react'
import { Workout } from '../features/workouts/workoutSlice'
import { RiDeleteBin3Fill } from "react-icons/ri";

const CardDetails:React.FC<Workout> = ({ title, reps, load, createdAt, onDelete }) => (
  <div className="shadow-md border w-full border-gray-200 p-7 bg-white rounded flex flex-row items-center justify-between">
    <div className='container-fluid'>
      <h2 className="text-sky-600 text-xl font-urbanist font-bold">{title}</h2>
      <p><strong>Reps:</strong> {reps}</p>
      <p><strong>Load:</strong> {load}</p>
      <p>{new Date(createdAt).toLocaleDateString()}</p>
    </div>
   
    <RiDeleteBin3Fill onClick={onDelete} className="text-3xl text-red-800"/>
  </div>
)

export default CardDetails
