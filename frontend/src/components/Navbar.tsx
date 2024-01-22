import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-lime-500">
        <div className="container flex flex-row items-center justify-between text-white px-10 py-8">
            <Link to="/" >
                <h1 className="font-urbanist text-3xl md:text-5xl font-bold">Workout App</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
