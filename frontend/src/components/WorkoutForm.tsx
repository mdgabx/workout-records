import React from 'react'

const WorkoutForm:React.FC = () => {
  return (
    <div className='w-5/12 container my-10'>
        <form className="flex flex-col items-start justify-center p-10 gap-4 bg-white shadow border-gray-200 rounded-md">
            <h3 className='text-3xl'>Record a workout</h3>

            <label>Exercise Title:</label>
            <input 
                type='text'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
            />

            <label>Load (in kg):</label>
            <input 
                type='text'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
            />

            <label>Reps:</label>
            <input 
                type='text'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
            />
            <button 
            className='mx-auto rounded-lg py-2 px-4 bg-green-700 text-white shadow hover:bg-white hover:text-black'>
                ADD
            </button>
        </form>
    </div>
  )
}

export default WorkoutForm
