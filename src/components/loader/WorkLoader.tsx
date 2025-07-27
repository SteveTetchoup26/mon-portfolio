

const WorkLoader = () => {
    return (
        <div 
            className="relative bg-gray-50 animate-pulse min-w-[350px] max-w-[350px] md:min-w-[400px] md:max-w-[400px] h-[460px] flex flex-col py-3 px-3 gap-3 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg flex-shrink-0 snap-start"    
        >
            <div className='w-full h-44 border bg-gray-200 rounded-t-lg'></div>
            <div className='flex flex-col gap-2 md:gap-4'>
                <div className="bg-gray-200 rounded-t-lg h-1 w-full"></div>
                <div className="bg-gray-200 rounded-t-lg h-1 w-full"></div>
                <p className="bg-gray-200 rounded-t-lg h-1 w-full"></p>
                <p className="bg-gray-200 rounded-t-lg h-1 w-full"></p>
            </div>
        </div>
    )
}

export default WorkLoader
