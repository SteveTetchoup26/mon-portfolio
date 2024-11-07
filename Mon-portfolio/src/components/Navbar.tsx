import { Link } from "react-router-dom"
import { assets_icons } from "../assets/icons/assets_icons"
const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center gap-10 py-6 px-8 lg:px-24'>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
          <ul className="text-lg md:flex md:gap-3 hidden">
            <Link to="/" className="p-3 text-sm font-semibold hover:text-gray-500">Home</Link>
            <a href="#about" className="p-3 text-sm font-semibold hover:text-gray-500">About</a>
            <a href="#portfolio" className="p-3 text-sm font-semibold hover:text-gray-500">Work</a>
            <a href="#contact" className="p-3 text-sm font-semibold hover:text-gray-500">Contact</a>
          </ul>
        </div>
        <div className="md:block hidden">
          <a href="../assets/pdf/cv_demande_de_stage_st.pdf" className="bg-black text-[15px] text-white p-3 rounded-lg hover:opacity-75 transition-opacity duration-200" download>Download CV</a>
        </div>
        <div className="block md:hidden cursor-pointer w-6 h-6">
            <img src={assets_icons.menu_fille} alt="menu_line" className="h-full w-full"/>
        </div>
    </nav>
  )
}

export default Navbar
