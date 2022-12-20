export default function CountrySkeleton() {
  return (
    <div className="w-full transition-all duration-500 dark:bg-s-dm-dark-blue bg-s-white flex flex-col">
      <div className="bg-s-lm-dark-gray animate-pulse rounded-t-md w-full aspect-video h-full min-h-[193.36px]"></div>

      <div className="w-full h-full p-5 flex flex-col">
        <div className="bg-s-lm-dark-gray w-5/6 aspect-[1/.1] animate-pulse rounded-xl"></div>
        <div className="w-4/6 flex flex-col gap-2 mt-4">
          <div className="bg-s-lm-dark-gray w-full aspect-[1/.1] animate-pulse rounded-xl"></div>
          <div className="bg-s-lm-dark-gray w-full aspect-[1/.1] animate-pulse rounded-xl"></div>
          <div className="bg-s-lm-dark-gray w-full aspect-[1/.1] animate-pulse rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
