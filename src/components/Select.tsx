import { ChangeEvent, useEffect, useState } from "react";

type SelectOptions = {
  label: string;
  value: string;
};
type SelectProps = {
  SelectOptions: SelectOptions[];
};
interface ISelect extends SelectProps {
  setSelected: (e: string) => void;
}
export default function Select(props: ISelect) {
  const [selected, setSelected] = useState("");
  const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    props.setSelected(selected);
  }, [selected, props]);
  return (
    <>
      <select
        className="transition-all duration-500 w-7/12 max-w-max self-start p-4 dark:bg-s-dm-dark-blue dark:text-s-lm-very-light-gray rounded-md bg-s-white border-none shadow-md outline-none font-nunito-sans text-sm font-semibold"
        value={selected}
        onChange={handleOnChangeSelect}
      >
        <option disabled={true} value="" hidden>
          Filter by Regions
        </option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="america">America</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}
