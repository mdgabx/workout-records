type EditModalType = {
    closeModal: () => void
}

const EditModal:React.FC<EditModalType> = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70">
        Modal
        <button onClick={closeModal} >close</button>
    </div>
  )
}

export default EditModal
