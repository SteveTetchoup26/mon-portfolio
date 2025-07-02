/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import VITE_API_URL from '../utils/API_URL'

const Work = ({ work } : { work: any }) => {
    const navigate = useNavigate()
    const { main_image, title, publication_date, description, subtitle, id, is_finished } = work;
    return (
        <div 
            onClick={() => navigate(`/works/${id}`)}
            className="relative bg-gray-100 min-w-[350px] max-w-[350px] md:min-w-[400px] md:max-w-[400px] h-[450px] flex flex-col py-3 px-3 gap-3 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg flex-shrink-0 snap-start"    
        >
            <div className='w-full h-44 border border-gray-300 rounded-t-lg'>
                <img src={`${VITE_API_URL}/uploads/skills/` + main_image} className='w-full h-full block rounded-t-lg' alt="" crossOrigin="anonymous" />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-bold'>{ title }</h2>
                <h3 className='text-sm text-gray-500'>{ subtitle }</h3>
                <p className='text-gray-400'>
                    <span className='bg-black text-sm text-white rounded-2xl mr-3 py-1 px-2'>
                        { publication_date }
                    </span> 
                    { is_finished ? 
                        <span className='text-sm text-green-600 bg-green-200 py-1 px-2 rounded-3xl'>Finished</span> :
                        <span className='text-sm text-orange-600 bg-orange-200 py-1 px-2 rounded-3xl'>In progress</span>
                    }
                    </p>
                <p className='line-clamp-4 text-gray-600'>
                    { description }
                </p>
            </div>
            <div className='flex justify-center items-center w-full absolute bottom-2 left-0 right-0'>
                <button className='bg-black text-white border-black border-2 py-2 px-3 rounded-3xl hover:bg-white hover:text-black transition-all duration-200 ease-in-out'>View details</button>
            </div>
        </div>
    )
}

export default Work
