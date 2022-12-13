import { ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
interface ISearch {
  setSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Search(props: ISearch) {
  return (
    <div className="flex gap-4 w-full max-w-lg bg-s-white shadow-md p-3 dark:bg-s-dm-dark-blue rounded-md">
      <div className="flex justify-center items-center ml-3">
        <AiOutlineSearch size="20" className="dark:text-s-lm-very-light-gray" />
      </div>
      <input
        onChange={props.setSearch}
        className="outline-none border-none dark:placeholder-s-lm-very-light-gray dark:bg-s-dm-dark-blue dark:text-s-lm-very-light-gray p-1 text-sm"
        placeholder="Search for a country..."
      />
    </div>
  );
}
