import Navbar from "../components/Navbar"
import InfoModal from "../components/InfoModal"

export default function Home() {
    return(
      <div>
        <Navbar />
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
            <InfoModal />
          </div>
        </div>
      </div>
    )
  }