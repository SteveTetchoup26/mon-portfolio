import { useState } from "react"
import { assets_icons } from "../assets/icons/assets_icons"

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className='w-full hidden md:flex justify-between items-center gap-10 py-6 px-8 lg:px-24'>
        <div>
            <a href="/" className="font-extrabold text-xl">ST</a>
        </div>
        <div>
          <ul className="text-lg md:flex md:gap-3 hidden">
            <a href="/" className="p-3 text-sm font-semibold hover:text-gray-500">Home</a>
            <a href="#about" className="p-3 text-sm font-semibold hover:text-gray-500">About</a>
            <a href="#portfolio" className="p-3 text-sm font-semibold hover:text-gray-500">Work</a>
            <a href="#contact" className="p-3 text-sm font-semibold hover:text-gray-500">Contact</a>
          </ul>
        </div>
        <div className="md:block hidden">
          <a href="../assets/pdf/cv_demande_de_stage_st.pdf" className="bg-black text-[15px] text-white p-3 rounded-lg hover:opacity-75 transition-opacity duration-200" download>Download CV</a>
        </div>
      </nav>
      <nav className="md:hidden flex flex-col w-full gap-2 py-6 px-8">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="font-bold">ST</h1>
            </div>
            <div className="block md:hidden cursor-pointer w-8 h-8 hover:bg-gray-200 p-1 rounded-full" onClick={() => setMenu(!menu)}>
              <img src={assets_icons.menu_fille} alt="menu_line" className="h-full w-full"/>
            </div>
          </div>
          <div className={ menu ? 'w-full h-auto opacity-100 transition-opacity duration-700 ease-in-out' : 'w-full h-0 opacity-0 overflow-hidden'}>
            <ul className="text-lg w-full flex flex-col">
              <a href="/" className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Home</a>
              <a href="#about" className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">About</a>
              <a href="#portfolio" className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Work</a>
              <a href="#contact" className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Contact</a>
              <a href="../assets/pdf/cv_demande_de_stage_st.pdf" className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid" download>Download CV</a>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar
