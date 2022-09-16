import '../App.css';

export default function Home() {
  return(
    <div>
      <div className="text-center bg-blue-400 py-5 text-black">
        <h1 className="text-2xl font-bold">Project Brisket</h1>
      </div>
      <div className="overflow-hidden bg-yellow-200 h-screen">
        <div>
          <img src='gifs/taunt.gif' alt='bridget music taunt' className="block mx-auto" />
        </div>
      </div>
    </div>
  )
}
