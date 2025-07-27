const ExperienceLoader = () => {
  return (
    <div className="animate-pulse min-w-[350px] max-w-[350px] md:min-w-[400px] md:max-w-[400px] h-[235px] md:h-52 flex-shrink-0 snap-start bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="bg-gray-200 rounded-full w-8 h-8 min-w-8 md:w-12 md:h-12 md:min-w-12 overflow-hidden flex items-center justify-center">
      </div>

      <div className="flex flex-col gap-2 md:gap-2 flex-1 overflow-hidden">
        <div>
          <h3 className="bg-gray-200 rounded-md h-1 w-2/5 mb-2"></h3>
          <p className="bg-gray-200 rounded-md h-1 w-1/5"></p>
        </div>

        <div className="flex items-center text-xs text-gray-400 font-medium gap-2">
          <span className="bg-gray-200  h-1 w-4 rounded-md"></span>
          <span  className="bg-gray-200  h-1 w-4 rounded-md"></span>
        </div>

        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
        <p className="bg-gray-200 rounded-t-lg h-1 w-full rounded-md"></p>
      </div>
    </div>
  )
}

export default ExperienceLoader