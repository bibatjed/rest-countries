import CountrySkeleton from "./CountrySkeleton";

const dummy = Array.from(Array(12).keys());
export default function CountrySkeletonWrapper() {
  return (
    <>
      {dummy.map((_, index) => {
        return <CountrySkeleton key={index.toString()} />;
      })}
    </>
  );
}
