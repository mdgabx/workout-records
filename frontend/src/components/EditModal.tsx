import { IoMdClose } from "react-icons/io";

type EditModalType = {
    closeModal: () => void
}

const EditModal:React.FC<EditModalType> = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center">
        {/* Modal
        <button onClick={closeModal} >close</button> */}

        
        <div className="relative rounded-md w-3/12  p-10 bg-white shadow border-gray-200 ">
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

            />

            <label>Load (in kg):</label>
            <input 
                type='number'
                name='load'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
            />

            <label>Reps:</label>
            <input 
                type='number'
                name='reps'
                className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
            />
            <button 
            className='mx-auto rounded-lg py-2 px-4 bg-green-700 text-white shadow hover:bg-white hover:text-black'
            >
                SAVE
            </button>
        </form>

        </div>
               
    </div>
  )
}

export default EditModal
