import work1 from '../assets/images/work-1.png'
import VITE_API_URL from '../utils/API_URL'

const Work = ({title, subtitle, description, publication_date, main_image} : {
    title: string,
    subtitle: string,
    description: string,
    publication_date: string,
    main_image: string,
}) => {
  return (
        <div className="flex flex-col md:flex-row  w-full xl:w-4/5 py-5 px-2 gap-3 border-b-2 border-gray-300 border-solid cursor-pointer lg:hover:scale-110 transition-all duration-300
         hover:shadow-[1px_1px_5px_#c9c8c8] hover:border-none"    
        >
            <div className='basis-3/12'>
                <img src={`${VITE_API_URL}/uploads/skills/` + main_image} className='w-full h-full object-cover' alt="" crossOrigin="anonymous" />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>{ title }</h2>
                <p className='text-gray-400'><span className='bg-black text-sm text-white rounded-2xl mr-3 py-1 px-2'>{ publication_date }</span> { subtitle }</p>
                <p>
                    { description }
                </p>
            </div>
        </div>
  )
}

export default Work
