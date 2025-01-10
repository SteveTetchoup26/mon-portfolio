import VITE_API_URL from '../utils/API_URL'


const Experience = ({image, jobTitle, company, description, start_date, end_date} : { image: string, jobTitle: string, company: string, description: string, start_date: string, end_date: string}) => {
  return (
    <div 
        className='bg-white w-full md:w-8/12 flex flex-col md:flex-row justify-between gap-1 md:gap-8 md:px-4 py-4 px-5 rounded-lg  
            shadow-[0_5px_5px_#e2e2e2] cursor-pointer hover:shadow-[1px_5px_5px_#9e9e9e] transition-shadow duration-300'
    >
        <div className='w-[40px] h-[40px]'>
            <img src={`${VITE_API_URL}/uploads/skills/` + image} alt="" crossOrigin="anonymous"/>
        </div>
        <div className='flex flex-1 flex-col-reverse gap-2 md:flex-row justify-between'>
            <div className='basis-3/5 md:pl-2 pl-0'>
                <div className='mb-2'>
                    <h3 className='font-bold'>{ jobTitle }</h3>
                    <p className='text-gray-500'>{ company }</p>
                </div>
                {/* <ul className='list-disc text-gray-700'>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                </ul> */}
                <div className='text-gray-700'>
                    { description }
                </div>
            </div>
            <div>
                <p className='text-gray-500 text-sm'>{ start_date} - {end_date }</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
