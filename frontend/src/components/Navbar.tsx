import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <div className="container flex flex-row items-center justify-between bg-lime-500 text-white px-6 py-10">
            <Link to="/" >
                <h1 className="font-urbanist text-5xl font-bold">Workout App</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
