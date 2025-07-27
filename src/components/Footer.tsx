import { assets_icons } from '../assets/icons/assets_icons.tsx'

const Footer = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-4 pt-14 pb-6 bg-black text-white'>
        <div className='flex gap-[8px]'>
          <a href="https://www.linkedin.com/in/steve-tetchoup-98529027b" 
            className='bg-gray-400 p-1 rounded-lg  hover:bg-gray-200 transition-all duration-200'
            target='blank'
            >
              <img src={assets_icons.linkedin_icon} alt="" className='h-5 w-5' />
          </a>
          <a href="https://www.github.com/SteveTetchoup26" 
            className='bg-gray-400 p-1 rounded-lg hover:bg-gray-200 transition-all duration-200'
            target='blank'
            >
              <img src={assets_icons.github} alt="" className='h-5 w-5' />
          </a>
        </div>
        <p className='text-center text-sm'>© 2025 Steve TETCHOUP. All rights reserved.</p>
    </div>
  )
}

export default Footer
