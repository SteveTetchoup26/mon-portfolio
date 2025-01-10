import VITE_API_URL from "../utils/API_URL"



const Skills = ({image, name} : {image: string, name: string}) => {

  return (
        <div className="flex flex-col items-center w-2/12">
            <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-cover">
                <img src={`${VITE_API_URL}/uploads/skills/` + image} alt="" className="w-full h-full object-cover" crossOrigin="anonymous" />
            </div> 
            <p className='text-gray-500 text-[12px] md:text-sm'>{name}</p> 
        </div>
  )
}

export default Skills
