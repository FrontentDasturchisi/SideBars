import React, { useState } from 'react'
import { CiSquareChevLeft } from "react-icons/ci";
import { FaBoltLightning } from "react-icons/fa6";
import img8 from "./img/set.png"
import img2 from "./img/box.jpg"
import img3 from "./img/akk.webp"
const App = () => {

  let Munes = [
    { title: "Inbox", src: img2, },
    { title: "Accaunts", src: img3, gap: true },
    { title: "Setting", src: img8, },
  ]

  const [open, setOpen] = useState(false)
  return (
    <div className='flex '>
      <div className={`${open ? "w-72" : "w-20"} h-screen p-3 pt-9 bg-blue-950 transition-all duration-300 relative `}>

        <button onClick={() => setOpen(!open)} className={`absolute text-w -right-3 top-10 rounded-full border-2 bg-blue-700  text-3xl cursor-pointer ${!open && "rotate-180"} `}><CiSquareChevLeft /></button>
        <div className='flex gap-x-5 items-center'>
          <span className={`${open && "rotate-[360deg]"} bg-white text-2xl p-2 rounded-full`}><FaBoltLightning /></span>
          <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300 `}>Designer</h1>
        </div>
        <ul className='pt-6'>
          {
            Munes.map((menu, i) => (
              <li className='text-gray-300 hover:bg-gray-400  rounded-xl p-2 text-sm flex items-center gap-x-5 cursor-pointer' key={i}>
                <img className='w-7 my-2  rounded-full' src={menu.src} alt="" />
                <span className={`${!open && "hidden"} origin-left duration-200 py-2 font-bold`}>{menu.title}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='p-7 text-2xl font-semibold flex h-screen '>
        <h1>SideBars</h1>
      </div>
    </div>
  )
}

export default App
