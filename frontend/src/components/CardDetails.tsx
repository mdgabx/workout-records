import React from 'react'
import { RiDeleteBin3Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

interface WorkoutCard {
  title: string;
  reps: number;
  load: number;
  createdAt: Date;
  onDelete: () => void;
  onEdit: () => void;
}

const CardDetails:React.FC<WorkoutCard> = ({ title, reps, load, createdAt, onDelete, onEdit }) => { 

  return (
  <div className="shadow-md border w-full border-gray-200 p-7 bg-white rounded flex flex-row items-center justify-between">
    <div className='container-fluid'>
      <h2 className="text-sky-600 text-xl font-urbanist font-bold">{title}</h2>
      <p><strong>Reps:</strong> {reps}</p>
      <p><strong>Load:</strong> {load}</p>
      <p>{new Date(createdAt).toLocaleDateString()}</p>
    </div>

    <div className='flex flex-row gap-x-4'>
      <MdModeEdit onClick={onEdit} className='text-3xl text-teal-800 ease-in-out duration-300 hover:scale-150' />
      <RiDeleteBin3Fill onClick={onDelete} className="text-3xl text-red-800 ease-in-out duration-300 hover:scale-150"/>
    </div>
    </div>
  )
}

export default CardDetails
