import work1 from '../assets/images/work-1.png'

const Work = () => {
  return (
        <div className="flex flex-col md:flex-row justify-between w-full xl:w-4/5 py-5 px-2 gap-3 border-b-2 border-gray-300 border-solid cursor-pointer lg:hover:scale-110 transition-all duration-300
         hover:shadow-[1px_1px_5px_#c9c8c8] hover:border-none"    
        >
            <div className='basis-2/5'>
                <img src={work1} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>Designing Dashboards</h2>
                <p className='text-gray-400'><span className='bg-black text-white rounded-xl mr-3 py-1 px-2'>2020</span>Dashboard</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iusto reiciendis esse odit culpa
                    dicta laborum asperiores facilis, quae minima repudiandae?
                </p>
            </div>
        </div>
  )
}

export default Work
