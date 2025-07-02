import { useState } from "react"
import { assets_icons } from "../assets/icons/assets_icons"
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      setTimeout(() => {
        window.location.hash = `#${sectionId}`;
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.location.hash = `#${sectionId}`;
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className='w-full hidden md:flex justify-between items-center gap-10 border border-b-gray-200 py-3 px-8 lg:px-24 fixed top-0 left-0 right-0 z-50 bg-white'>
        <div>
            <a href="/" className="font-extrabold text-xl">ST</a>
        </div>
        <div>
          <ul className="text-lg md:flex md:gap-3 hidden">
            <button onClick={() => handleNavClick('about')} className="p-3 text-sm font-semibold hover:text-gray-500">About</button>
            <button onClick={() => handleNavClick('skills')} className="p-3 text-sm font-semibold hover:text-gray-500">Skills</button>
            <button onClick={() => handleNavClick('experiences')} className="p-3 text-sm font-semibold hover:text-gray-500">Experiences</button>
            <button onClick={() => handleNavClick('portfolio')} className="p-3 text-sm font-semibold hover:text-gray-500">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="p-3 text-sm font-semibold hover:text-gray-500">Contact</button>
          </ul>
        </div>
        <div className="md:block hidden">
          <a href="/CV_Steve_TETCTHOUP.pdf" className="bg-black text-[15px] text-white p-3 rounded-lg hover:opacity-75 transition-opacity duration-200 pointer-events-none cursor-not-allowed" download>Download CV</a>
        </div>
      </nav>
      <nav className="md:hidden flex flex-col w-full gap-2 border border-b-gray-200 py-2 px-8 fixed top-0 left-0 right-0 z-50 bg-white">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="font-bold">ST</h1>
            </div>
            <div className="block md:hidden cursor-pointer w-8 h-8 hover:bg-gray-200 p-1 rounded-full" onClick={() => setMenu(!menu)}>
              <img src={assets_icons.menu_fille} alt="menu_line" className="h-full w-full"/>
            </div>
          </div>
          <div className={ menu ? 'w-full h-auto opacity-100 transition-opacity duration-700 ease-in-out' : 'w-full h-0 opacity-0 overflow-hidden'}>
            <ul onClick={() => setMenu(!menu)} className="text-lg w-full flex flex-col">
              <button onClick={() => handleNavClick('about')} className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">About</button>
              <button onClick={() => handleNavClick('skills')} className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Skills</button>
              <button onClick={() => handleNavClick('experiences')} className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Experiences</button>
              <button onClick={() => handleNavClick('portfolio')} className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Projects</button>
              <button onClick={() => handleNavClick('contact')} className="p-3 text-sm hover:text-gray-500 border-b-2 border-gray-200 border-solid">Contact</button>
              <a href="../assets/pdf/cv_demande_de_stage_st.pdf" className="p-3 text-sm text-center hover:text-gray-500 border-b-2 border-gray-200 border-solid pointer-events-none cursor-not-allowed" download>Download CV</a>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar
