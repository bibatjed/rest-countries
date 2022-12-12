import { ChangeEvent } from "react";
import Country from "./components/Country";
import Header from "./components/Header";
import Search from "./components/Search";
import Select from "./components/Select";
import useCountries from "./hooks/useCountries";

const selectOptions = [
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "America",
    value: "america",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
];
function App() {
  const { dataFilter, setSelected, setSearch } = useCountries();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-s-lm-very-light-gray dark:bg-s-dm-very-dark-blue h-full min-h-screen">
      <Header />
      <div className="flex items-center flex-col w-11/12 gap-8 m-auto mt-6">
        <Search setSearch={handleOnChange} />
        <Select SelectOptions={selectOptions} setSelected={setSelected} />
      </div>
      {dataFilter?.map((value) => {
        return (
          <div className="w-11/12 m-auto mt-9 grid ">
            <Country
              image={value.flags.png}
              name={value.name.common}
              population={value.population}
              region={value.region}
              capital={value.capital}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
