/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import VITE_API_URL from '../utils/API_URL'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Work = ({ work } : { work: any }) => {
    const navigate = useNavigate()
    const { main_image, title, publication_date, description, subtitle, id, is_finished } = work;
    return (
        <div 
            onClick={() => navigate(`/works/${id}`)}
            className="bg-gray-50 w-full sm:w-[350px] md:w-[400px] min-h-[460px] flex flex-col justify-between py-3 px-3 gap-3 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg flex-shrink-0 snap-start"    
        >
            <div>
                <div className='w-full h-44 border border-gray-300 rounded-lg mb-1'>
                    <img src={`${VITE_API_URL}/uploads/skills/` + main_image} className='w-full h-full block rounded-t-lg' alt="" crossOrigin="anonymous" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold'>{ title }</h2>
                    <h3 className='text-sm text-gray-500'>{ subtitle }</h3>
                    <p className='text-gray-400 text-sm'>
                        <span className='bg-black text-sm text-white rounded-2xl mr-3 py-1 px-2'>
                            { publication_date }
                        </span> 
                        { is_finished ? 
                            <span className='text-green-600 bg-green-200 py-1 px-2 rounded-3xl'>Finished</span> :
                            <span className='text-orange-600 bg-orange-200 py-1 px-2 rounded-3xl'>In progress</span>
                        }
                        </p>
                    <p className='line-clamp-3 text-gray-600'>
                        { description }
                    </p>
                </div>
            </div>
            <div className='flex justify-end items-center w-full bottom-2 left-0 right-0'>
                <button className='text-sm font-semibold flex justify-center items-center gap-1 border-b-2 border-gray-50 hover:border-black'>
                    <span>see details</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Work
