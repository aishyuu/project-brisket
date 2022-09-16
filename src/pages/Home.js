import { Link } from "react-router-dom"

export default function Home() {
    return(
      <div>
        <div className="text-center bg-blue-400 py-5 text-black">
          <h1 className="text-2xl font-bold font-epilogue">
            Project Brisket
          </h1>
        </div>
        <div className="overflow-hidden bg-yellow-200 h-screen">
          <div>
            <img src='gifs/taunt.gif' alt='bridget music taunt' className="block mx-auto" />
          </div>
          <div className="p-6 bg-white border-spacing-8 border-white border-2 rounded-lg w-fit mx-auto drop-shadow-lg">
            <h1 className="text-lg font-epilogue lg:text-3xl">
              The all in one place for Bridget Frame Data Visualization
            </h1>
          </div>
          <div className="p-6 w-fit mx-auto">
            <button className="bg-blue-400 rounded-2xl mx-auto p-3 hover:bg-blue-500">
                <Link to="/movelist">
                    <h1 className="text-xl">Start Here</h1>
                </Link>
            </button>
          </div>
        </div>
      </div>
    )
  }