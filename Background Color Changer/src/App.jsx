import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("#212121")

  return (
    <>
      <div id='mainDiv' className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <h2 className='text-5xl'> Background Color Changer</h2>

        <p>Times Background Color changed: {count} </p>

        <div id='buttonsDiv' className=''>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-10 md:space-y-0">


            <button
              onClick={()=>{setColor("rgb(51 65 85)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-slate-700 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-slate-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            >
              Slate
            </button>
            <button
              onClick={()=>{setColor("rgb(202 138 4)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-yellow-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Yellow
            </button>
            <button
              onClick={()=>{setColor("rgb(220 38 38)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Red
            </button>
            <button
              onClick={()=>{setColor("rgb(22 163 74)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Green
            </button>
            <button
              onClick={()=>{setColor("rgb(134 25 143)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-fuchsia-800 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-fuchsia-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-800"
            >
              Fuchsia
            </button>
            <button
              onClick={()=>{setColor("rgb(194 65 12)"); setCount(count+1)}}
              type="button"
              className="rounded-md bg-orange-700 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-orange-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
