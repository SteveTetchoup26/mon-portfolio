/* eslint-disable @typescript-eslint/no-explicit-any */
import VITE_API_URL from '../utils/API_URL'


const Experience = ({ experience }: { experience: any }) => {
  const { image_company_url, job_title, company, description, start_date, end_date } = experience;
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] h-[235px] md:h-52 flex-shrink-0 snap-start bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="w-8 h-8 min-w-8 md:w-12 md:h-12 md:min-w-12 overflow-hidden flex items-center justify-center">
        <img
          src={`${VITE_API_URL}/uploads/skills/${image_company_url}`}
          alt="company logo"
          className="object-contain w-full h-full"
          crossOrigin="anonymous"
        />
      </div>

      <div className="flex flex-col gap-1 md:gap-2 flex-1 overflow-hidden">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job_title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>

        <div className="flex items-center text-xs text-gray-400 font-medium">
          <span className="pr-1  py-1 rounded-md">{start_date}</span> - 
          <span className="pl-1  py-1 rounded-md">{end_date}</span>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed !line-clamp-4 whitespace-pre-wrap break-words">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Experience
