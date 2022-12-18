export default function DetailedPageSkeletion() {
  return (
    <div className="flex gap-7 flex-col md:flex-row md:justify-between md:gap-10 lg:gap-28 w-full">
      <div className="animate-pulse bg-s-lm-dark-gray w-full md:w-3/6 max-h-[613px] flex-grow aspect-video shrink-0"></div>
      <div className="md:self-center grid gap-7 md:grid-cols-2 md:gap-0 md:grid-rows-[50px_180px_100px] lg:gap-x-24 lg:gap-y-6 w-full ">
        <div className="animate-pulse bg-s-lm-dark-gray w-2/6 aspect-[1/.4] lg:aspect-[1/.2] rounded-md md:col-span-2"></div>
        <div className="flex gap-1 flex-col md:col-span-1 md:self-center lg:self-center">
          <div className="animate-pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate-pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
        </div>
        <div className="flex gap-1 flex-col md:col-span-1 md:self-center lg:self-center">
          <div className="animate-pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate-pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="animate pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
        </div>
        <div className="mb-2 flex flex-col gap-2 md:items-center md:col-span-2 md:flex-row md:flex-wrap">
          <div className="animate pulse bg-s-lm-dark-gray w-3/6 aspect-[1/.1] md:aspect-[1/.2] rounded-md"></div>
          <div className="grid grid-cols-110 gap-3 md:gap-1 md:flex md:flex-row md:flex-wrap">
            <div className="p-2 rounded-md px-3 animate-pulse bg-s-lm-dark-gray w-28 aspect-[1/.2] md:aspect-[1/.4] md:px-1 md:w-20 md:p-1 "></div>
            <div className="p-2 rounded-md  px-3 animate-pulse bg-s-lm-dark-gray w-28 aspect-[1/.2] md:px-1 md:w-20 md:p-1 "></div>
            <div className="p-2 rounded-md  px-3 animate-pulse bg-s-lm-dark-gray w-28 aspect-[1/.2] md:px-1 md:w-20 md:p-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
