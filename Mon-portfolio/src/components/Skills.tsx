import VITE_API_URL from "../utils/API_URL"



const Skills = ({image, name} : {image: string, name: string}) => {

  return (
        <div className="flex flex-col items-center">
            <div className="w-8 h-8 min-w-8 md:w-12 md:h-12 md:min-w-12">
                <img src={`${VITE_API_URL}/uploads/skills/` + image} alt="" className="w-full h-full block" crossOrigin="anonymous" />
            </div> 
            <p className='text-gray-500 text-[12px] md:text-sm'>{name}</p> 
        </div>
  )
}

export default Skills
