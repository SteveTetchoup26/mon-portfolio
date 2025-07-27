/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VITE_API_URL from '../utils/API_URL';
import axios from 'axios';
import { IWork } from '../types';

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState<IWork>();

  const fetchWork = async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/v1/works/${id}`);
      setWork(response.data.work);
    } catch (error) {
      console.error("Error fetching work details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWork();
      window.scrollTo(0, 0);
    }
  }, [id]);


    const formattedDate = work?.publication_date
        ? new Date(work.publication_date).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : '';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-12 text-gray-800">
        <h1 className="text-xl md:text-4xl font-bold md:mb-4 leading-tight">{work?.title}</h1>
        <h2 className="text-sm md:text-xl text-gray-500 mb-2">{work?.subtitle}</h2>
        <div className='w-full flex flex-col md:flex-row justify-between md:items-center mb-6 gap-2'>
            <p className="text-sm text-gray-400">Published on {formattedDate}</p>
            {
                work?.is_finished ? 
                <span className="w-max text-[12px] md:text-sm text-green-600 font-semibold bg-green-200 p-1 md:p-2 rounded-3xl">Finished</span> :
                <span className="w-max text-[12px] md:text-sm text-orange-600 font-semibold bg-orange-200 p-1 md:p-2 rounded-3xl">In progress</span>
            }
        </div>

        <img
            src={`${VITE_API_URL}/uploads/skills/${work?.main_image}`}
            alt="Main work illustration"
            className="w-full h-auto rounded-xl mb-6 border border-gray-200 object-cover"
            crossOrigin="anonymous"
        />

        <p className="text-lg leading-relaxed mb-10">{work?.description}</p>

        {(work?.images?.length ?? 0) > 0 && (
            <div className="grid grid-cols-1 gap-6 mt-8">
            {work?.images?.map((img: any) => (
                <div key={img.id} className="flex flex-col gap-2">
                    <p className="font-semibold">{img.heading}</p>
                    <p className="text-gray-500">{img.summary}</p>
                    <img
                        src={`${VITE_API_URL}/uploads/skills/${img.secondary_image}`}
                        alt={img.heading}
                        className="rounded-lg border border-gray-200"
                        crossOrigin="anonymous"
                    />
                </div>
            ))}
            </div>
        )}

        {
            work?.link && (
                <div className="mt-10 flex justify-center items-center">
                    <a href={`${work?.link}`} className='bg-gray-300 w-max p-2 rounded-3xl hover:bg-gray-100 transition-all duration-200 ease-in-out'>View project on GitHub</a>
                </div>
            )
        }
    </div>
  );
};

export default WorkDetail;
