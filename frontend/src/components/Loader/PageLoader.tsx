import { Rings } from 'react-loader-spinner'

const PageLoader = () => {
  return (
    <div 
    className="fixed top-0 left-0 h-full w-full bg-white bg-opacity-90 flex flex-col items-center overflow-hidden justify-center"
    >
        <Rings 
            height={150}
            width={150}
            color='#111'
        />

        <p className='font-urbanist text-xl font-strong'>Please wait for a while...</p>
    </div>
  )
}

export default PageLoader
