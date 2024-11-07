

const Skills = ({image, name} : {image: string, name: string}) => {
  return (
        <div className="flex flex-col items-center">
            <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]">
                <img src={image} alt="" className="h-full w-full" />
            </div> 
            <p className='text-gray-500 text-[12px] md:text-sm'>{name}</p> 
        </div>
  )
}

export default Skills
