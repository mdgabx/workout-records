import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
import { updateWorkout } from "../features/workouts/workoutSlice";

type EditModalType = {
    closeModal: () => void;
    title: string;
    reps: number;
    load: number;
    _id: string;
}

const EditModal:React.FC<EditModalType> = ({ _id, title, reps, load, closeModal }) => {
    const dispatch = useAppDispatch()
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedReps, setUpdatedReps] = useState(reps)
    const [updatedLoad, setUpdatedLoad] = useState(load)


    const handleSave = () => {
        const updatedForm = {
            _id: _id,
            title: updatedTitle,
            reps: updatedReps,
            load: updatedLoad,
            createdAt: new Date(), 
        }

        dispatch(updateWorkout(updatedForm))
        closeModal()
    }


  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center">      
        <div className="relative rounded-md w-10/12 md:w-3/12  p-10 bg-white shadow border-gray-200 ">
        <IoMdClose 
          onClick={closeModal} 
          className="text-red-800 absolute right-2 top-2 text-2xl cursor-pointer hover:scale-150 ease-in-out duration-300" 
        />
        <form className="flex flex-col items-start justify-center gap-4">
            <h3 className='text-3xl'>Edit Workout</h3>
            <label>Exercise Title:</label>
            <input 
                type='text'
                name='title'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                value={updatedTitle}
                onChange={(event) => setUpdatedTitle(event.target.value) }
            />

            <label>Load (in kg):</label>
            <input 
                type='number'
                name='load'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                value={updatedLoad}
                onChange={(event) => setUpdatedLoad(parseInt(event.target.value)) }
            />

            <label>Reps:</label>
            <input 
                type='number'
                name='reps'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
                value={updatedReps}
                onChange={(event) => setUpdatedReps(parseInt(event.target.value)) }
            />
            <button 
            className='mx-auto rounded-lg py-2 px-4 bg-green-700 text-white shadow hover:bg-white hover:text-black'
            onClick={handleSave}
            >
                SAVE
            </button>
        </form>

        </div>
               
    </div>
  )
}

export default EditModal
