export default function ProjectCardLoading() {
  return (
    <div className="flex flex-col shadow rounded-md p-4 h-[180px] sm:w-[533px] mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 w-10 bg-gray-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-400 rounded col-span-2"></div>
              <div className="h-2 bg-gray-400 rounded col-span-2"></div>
              <div className="h-2 bg-gray-400 rounded"></div>
            </div>
            <div className="h-2 bg-gray-400 rounded"></div>
            <div className="grid grid-cols-10 gap-4">
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              <div className="h-4 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 w-16 bg-gray-400 rounded"></div>
          </div>
        </div>
        <div className="hidden md:flex rounded-2xl bg-gray-400 h-[145px] w-[145px]"></div>
      </div>
    </div>
  );
}
