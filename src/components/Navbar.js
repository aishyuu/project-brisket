import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="text-center bg-blue-400 py-5 text-black">
          <Link to="/">
            <h1 className="text-2xl font-bold font-epilogue">
              Project Brisket
            </h1>
          </Link> 
        </div>
    )
}