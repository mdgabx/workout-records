import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className="container mx-auto flex flex-row items-stretch justify-between p-6">
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
