import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'

const Footer = () => {
  return (
        <div className='flex flex-col items-center justify-center gap-4 pt-14 pb-6'>
            <div className='grid grid-cols-4 gap-4 w-[140px]'>
                <a href=""><img src={facebook} alt=""/></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={twitter} alt="" /></a>
                <a href=""><img src={youtube} alt="" /></a>
            </div>
            <p>Copyright ©2024 All rights reserved</p>
        </div>
  )
}

export default Footer
