/* eslint-disable @typescript-eslint/no-explicit-any */
import Skills from './Skills.tsx'
import Loader from './Loader.tsx'
import me from '../assets/images/moi.jpg'
import about from '../assets/images/about-me.png'
import { assets_icons } from '../assets/icons/assets_icons.tsx'
import { useState, useEffect } from 'react'
import VITE_API_URL from '../utils/API_URL.ts'
import axios from 'axios'
import WorkCatalog from './catalog/WorkCatalog.tsx'
import ExperienceCatalog from './catalog/ExperienceCatalog.tsx'


const LandingPage = () => {

  const [copied, setCopied] = useState(false)
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false);

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
  
    const fetchSkill = async () => {
      setIsLoading(true)
      try {
          const result = await axios.get(`${VITE_API_URL}/v1/skills/all`);
          setSkills(result.data.skills);
  
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
  }


  useEffect(() => {

    fetchSkill();

  }, []);

  return (
    <div className='mt-32'>
        <div className='min-h-[80vh] mt-5 mb-20 px-8 xl:px-24 flex md:flex-row md:justify-between md:items-start gap-10 lg:gap-20  items-center flex-col-reverse'>
          <div className='md:basis-3/5 flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-bold mb-5'>Hi, I'm Steve TETCHOUP</h1>
              <p className='text-gray-500'>
                I'm a passionate full-stack developer junior based in Douala, Cameroon. I enjoy turning complex problems into simple, beautiful, and intuitive web applications. 
                With a strong foundation in both frontend and backend development, I help businesses and individuals bring their ideas to life on the web.
              </p>
            </div>
            <div>
                <div>
                  <div className='flex items-center gap-2'>
                      <img src={assets_icons.location} alt="" className='w-5 h-5' />
                      <p className='text-gray-500'>Douala, Cameroon</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='p-1 ml-1 w-1 h-1 rounded-full bg-green-600'></div>
                  <p className='text-gray-500'>Available for new projects</p>
                </div>
            </div>
            <div className='flex gap-[2px]'>
              <a href="https://www.linkedin.com/in/steve-tetchoup-98529027b" 
                className='p-1 rounded-full hover:bg-gray-200 transition-all duration-200'
                target='blank'
                >
                  <img src={assets_icons.linkedin_icon} alt="" className='h-5 w-5' />
              </a>
              <a href="https://www.github.com/SteveTetchoup26" 
                className='p-1 rounded-full hover:bg-gray-200 transition-all duration-200'
                target='blank'
                >
                  <img src={assets_icons.github} alt="" className='h-5 w-5' />
              </a>
            </div>
            <div className='flex gap-4'>
              <a href="/CV_Steve_TETCTHOUP.pdf" className='bg-black text-white p-3 md:p-5 rounded-lg hover:opacity-75 transition-opacity duration-200 pointer-events-none cursor-not-allowed' download>Download CV</a>
              <a href="#portfolio" className='border border-black p-3 md:p-5 rounded-lg hover:bg-black hover:text-white transition-all ease-in-out duration-300'>View projects</a>
            </div>
          </div>
          <div className='lg:w-[350px] lg:h-[350px] h-[300px] w-[300px] relative'>
            <img src={me} alt="" className='object-cover lg:w-[350px] lg:h-[350px] w-4/5 h-4/5 md:w-full md:h-full absolute left-7 -top-8 md:-left-8 border-8 border-white border-solid' />
            <div className='bg-gray-200 lg:w-full lg:h-full w-[300px] md:h-[300px] h-[240px]'></div>
          </div>
        </div>

        <div id='about' className='scroll-mt-16 bg-gray-100 flex flex-col items-center gap-14 py-12 px-8 xl:px-24'>
          <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>About me</h2>
          <div className='flex md:flex-row !w-full flex-col gap-x-20 items-center md:items-start justify-between'>
            <div className='lg:w-[350px] lg:h-[350px] h-[300px] w-[300px] relative'>
              <img src={about} alt="" className='object-cover lg:w-[350px] lg:h-[350px] w-4/5 h-4/5 md:w-full md:h-full absolute right-8  md:-right-8 -top-8 border-8 border-white border-solid' />
              <div className='bg-gray-200 lg:w-full lg:h-full w-[300px] md:h-[300px] h-[240px]'></div>
            </div>
            <div className='md:basis-3/5'>
              <h1 className='text-4xl font-bold mb-4'>Curious about me ? Here you have it: </h1>
              <p className='text-gray-500'>
                I’m a passionate web developer with a strong focus on building modern user interfaces and high-performance applications. 
                I mainly work with technologies such as <strong>Vue.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>Express js</strong> to create dynamic and responsive frontend and backend systems.

                On the database side, I use <strong>PostgreSQL</strong> to design reliable and efficient data structures. 
                I’m proficient with <strong>Git</strong> and <strong>GitHub</strong>, which I use daily for version control and collaborative development. 
                I also have solid experience working with <strong>RESTful APIs</strong>, both in designing and consuming them in various personal and professional projects.

                Autonomous, curious, and detail-oriented, I continuously seek to deepen my knowledge and stay up to date with the latest web technologies. 
                I’m actively involved in building real-world solutions that allow me to put my skills into practice and deliver value.
              </p>

            </div>
          </div>
        </div>

        <div id='skills' className='scroll-mt-16 flex flex-col items-center gap-8 py-12 px-4 lg:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Skills</h2>
            <p className='text-gray-500 text-center'>The skills, tools and technologies I am really good at: </p>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-12 w-full'>
              { 
                isLoading ? 
                <Loader /> :
                skills.map((skill: any, index: number) => (
                  <Skills key={index} image={skill.image_url} name={skill.name} />
                ))
              }
          </div>
        </div>

        <div id='experiences' className='scroll-mt-16 bg-gray-100 flex flex-col items-center gap-8 py-12 px-2 xl:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Experience</h2>
            <p className='text-gray-500 text-center'>Here is a quick summary of my most recent experience: </p>
          </div>
          <ExperienceCatalog />
        </div>

        <div id='portfolio' className='scroll-mt-16 flex flex-col items-center gap-8 py-12 px-2 xl:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Works</h2>
            <p className='text-gray-500 text-center'>Some of the noteworthy projects I have built: </p>
          </div>
          <WorkCatalog />
        </div>

        <div id='contact' className='min-h-[80vh] scroll-mt-16 bg-gray-100 flex flex-col items-center gap-8 py-12 px-2 xl:px-24'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='bg-gray-200 rounded-3xl py-1 px-4 text-gray-600'>Get in touch</h2>
            <p className='text-gray-500 text-center'>I’m always open to discussing projects, collaboration opportunities, or just tech in general. Feel free to connect via any of the channels below.</p>
          </div>
          <div className='flex flex-col items-center gap-3 md:gap-8 border border-gray-400 md:text-xl font-semibold relative p-3 md:p-10 rounded-lg'>
            {
              copied && <p className='text-sm text-white bg-black px-2 py-1 rounded-3xl absolute top-1'>Copié</p>
            }
            <div className='flex items-center justify-between gap-2 border border-gray-400 p-2 py-4 md:p-6 rounded-lg w-full cursor-pointer hover:bg-gray-200 transition-all duration-75 ease-in-out'>
              <a href="mailto:stevetcthoup20@gmail.com" target='blank' className='flex items-center gap-2'>
                <img src={assets_icons.mail} alt="mail_icon" className='w-5 h-5' />
                <p className=' text-sm md:text-[16px]'>stevetcthoup20@gmail.com</p>
              </a>
              <p className='' onClick={copyMailToClipboard}><img src={assets_icons.copy} alt="" className='w-5 h-5'/></p>
            </div>
            <div className='flex items-center justify-between gap-2 border border-gray-400 p-2 py-4 md:p-6 rounded-lg w-full cursor-pointer hover:bg-gray-200 transition-all duration-75 ease-in-out'>
              <a href="https://whatsapp.com/dl/+237697932976?text=hello" target='blank' className='flex items-center gap-2'>
                <img src={assets_icons.phone} alt="phone" className='w-5 h-5'/>
                <p className='text-[16px]'>+237 697932976</p>
              </a>
              <p className='' onClick={copyPhoneToClipboard}><img src={assets_icons.copy} alt="" className='w-5 h-5'/></p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default LandingPage
