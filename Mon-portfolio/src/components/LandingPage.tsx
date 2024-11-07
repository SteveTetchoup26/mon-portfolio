import Skills from './Skills.tsx'
import me from '../assets/images/moi.png'
// import tailwind from '../assets/images/tailwind.png'
import postgresql from '../assets/images/postgresql.png'
import Experience from './Experience.tsx'
import Work from './Work.tsx'
import { assets_icons } from '../assets/icons/assets_icons.tsx'
import { useState } from 'react'


const LandingPage = () => {

  const [copied, setCopied] = useState(false)

  const copyMailToClipboard = () => {
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
    const mail = "stevetcthoup20@gmail.com"
    navigator.clipboard.writeText(mail)
  }

  const copyPhoneToClipboard = () => {
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
    const phone = "+237 697932976"
    navigator.clipboard.writeText(phone)
  }
  return (
    <div className='mt-12'>
        <div className='mt-5 mb-20 px-8 xl:px-24 flex md:flex-row md:justify-between md:items-start gap-10 lg:gap-20  items-center flex-col-reverse'>
          <div className='md:basis-3/5 flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-bold'>Hi, I'm TETCHOUP</h1>
              <p className='text-gray-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam ducimus sapiente tempore nemo 
                deleniti voluptatibus cupiditate accusamus. Dolorem nihil explicabo, at assumenda vero iste. Animi 
                minus quis aspernatur voluptatum.
              </p>
            </div>
            <div>
                <div>
                  <a href='' className='flex items-center gap-2'>
                      <img src={assets_icons.location} alt="" className='w-5 h-5' />
                      <p className='text-gray-500'>Douala, Cameroon</p>
                  </a>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='p-1 ml-1 w-1 h-1 rounded-full bg-green-600'></div>
                  <p className='text-gray-500'>Available for new projects</p>
                </div>
            </div>
            <div className='flex gap-[2px]'>
              <a href="https://www.facebook.com/stevetetchoup" 
                className='p-1 rounded-full hover:bg-gray-200 transition-all duration-200'
                >
                  <img src={assets_icons.facebook_icon} alt="" className='h-5 w-5' />
              </a>
              <a href="https://www.linkedin.com/in/steve-tetchoup-98529027b" 
                className='p-1 rounded-full hover:bg-gray-200 transition-all duration-200'
                >
                  <img src={assets_icons.linkedin_icon} alt="" className='h-5 w-5' />
              </a>
              <a href="" 
                className='p-1 rounded-full hover:bg-gray-200 transition-all duration-200'
                >
                  <img src={assets_icons.github} alt="" className='h-5 w-5' />
              </a>
            </div>
          </div>
          <div className='lg:w-[350px] lg:h-[350px] h-[300px] w-[300px] relative'>
            <img src={me} alt="" className='lg:w-[350px] lg:h-[350px] w-4/5 h-4/5 md:w-full md:h-full absolute left-7 -top-8 md:-left-8 border-8 border-white border-solid' />
            <div className='bg-gray-200 lg:w-full lg:h-full w-[300px] md:h-[300px] h-[240px]'></div>
          </div>
        </div>

        <div id='about' className='bg-gray-100 flex flex-col items-center gap-10 md:gap-20 py-20 px-8 xl:px-24'>
          <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>About me</h2>
          <div className='flex md:flex-row !w-full flex-col gap-x-20 items-center md:items-start justify-between'>
            <div className='lg:w-[350px] lg:h-[350px] h-[300px] w-[300px] relative'>
              <img src={me} alt="" className='lg:w-[350px] lg:h-[350px] w-4/5 h-4/5 md:w-full md:h-full absolute right-8  md:-right-8 -top-8 border-8 border-white border-solid' />
              <div className='bg-gray-200 lg:w-full lg:h-full w-[300px] md:h-[300px] h-[240px]'></div>
            </div>
            <div className='md:basis-3/5'>
              <h1 className='text-4xl font-bold mb-4'>Curious about me ? Here you have it: </h1>
              <p className='text-gray-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam ducimus sapiente tempore nemo 
                deleniti voluptatibus cupiditate accusamus. Dolorem nihil explicabo, at assumenda vero iste. Animi 
                minus quis aspernatur voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex corporis, 
                distinctio, expedita, quos id pariatur ab iure laudantium labore a similique natus praesentium nisi recusandae 
                magni et odit eos facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui quasi autem 
                mollitia fuga, tenetur expedita ullam consectetur veritatis minus eaque rem! Delectus optio earum impedit quasi
                 excepturi repellendus recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis rerum 
                 ducimus facere deserunt modi consequatur sed minus dolore tempore culpa obcaecati, iste quod eos tempora! Cumque 
                 repudiandae illo similique!
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-8 py-20 px-8 md:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Skills</h2>
            <p className='text-gray-500 text-center'>The skills, tools and technologies I am really good at: </p>
          </div>
          <div className='grid md:grid-cols-8 grid-cols-4 gap-4 w-full'>
              <Skills image={postgresql} name="PostgreSQL" />
          </div>
        </div>

        <div className='bg-gray-100 flex flex-col items-center gap-8 py-20 px-2 xl:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Experience</h2>
            <p className='text-gray-500 text-center'>Here is a quick summary of my most recent experience: </p>
          </div>
          <Experience />
          <Experience />
        </div>

        <div id='portfolio' className='flex flex-col items-center gap-8 py-20 px-8 lg:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Works</h2>
            <p className='text-gray-500 text-center'>Some of the noteworthy projects I have built: </p>
          </div>
          <Work />
          <Work />
        </div>

        <div id='contact' className='bg-gray-100 flex flex-col items-center gap-8 py-20 px-2 xl:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Get in touch</h2>
            <p className='text-gray-500 text-center'>What's next ? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
          </div>
          <div className='flex flex-col items-center gap-2 md:text-xl font-semibold relative'>
            {
              copied && <p className='text-sm text-white bg-black px-2 py-1 rounded-3xl absolute -top-7'>Copié</p>
            }
            <div className='flex items-center gap-2'>
              <a href="mailto:stevetcthoup20@gmail.com" className='flex items-center gap-2'>
                <img src={assets_icons.mail} alt="mail_icon" className='w-5 h-5' />
                <p>stevetcthoup20@gmail.com</p>
              </a>
              <p className='cursor-pointer' onClick={copyMailToClipboard}><img src={assets_icons.copy} alt="" className='w-5 h-5'/></p>
            </div>
            <div className='flex items-center gap-2'>
              <a href="https://whatsapp.com/dl/+237697932976?text=hello" className='flex items-center gap-2'>
                <img src={assets_icons.phone} alt="phone" className='w-5 h-5'/>
                <p>+237 697932976</p>
              </a>
              <p className='cursor-pointer' onClick={copyPhoneToClipboard}><img src={assets_icons.copy} alt="" className='w-5 h-5'/></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
