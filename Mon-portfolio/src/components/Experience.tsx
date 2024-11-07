import starUml from '../assets/images/star-uml.png'


const Experience = () => {
  return (
    <div 
        className='bg-white flex flex-col md:flex-row justify-between md:justify-around gap-1 md:gap-8 md:px-4 py-4 px-5 rounded-lg xl:w-4/5 
            shadow-[0_5px_5px_#e2e2e2] cursor-pointer hover:shadow-[1px_5px_5px_#9e9e9e] transition-shadow duration-300'
        >
            <div className='w-[70px] h-[70px]'>
                <img src={starUml} alt="" />
            </div>
        <div className='flex flex-col-reverse gap-2 md:flex-row justify-between'>
            <div className='basis-4/5 pl-2 md:pl-0'>
                <div className='mb-2'>
                    <h3 className='font-bold'>Frontend developer</h3>
                    <p className='text-gray-500'>Google</p>
                </div>
                <ul className='list-disc text-gray-700'>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                    <li> fugiat possimus necessitatibus quia officia facere voluptates dolor excepturi, dignissimos ex.</li>
                </ul>
            </div>
            <div>
                <p className='text-gray-500 text-sm'>Nov 2021 - Oct 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
