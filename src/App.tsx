import { ChangeEvent } from "react";
import Country from "./components/Country";
import CountrySkeletonWrapper from "./components/CountrySkeletonWrapper";
import Main from "./components/Main";
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
  const { dataFilter, setSelected, setSearch, isLoading } = useCountries();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Main>
      <div className="transition-all duration-500 bg-s-lm-very-light-gray dark:bg-s-dm-very-dark-blue h-full min-h-screen">
        <main className="w-full flex-col flex items-center">
          <div className="flex md:flex-row md:justify-between md:mt-12 flex-col w-11/12 max-w-[1920px] gap-8 mt-6">
            <Search setSearch={handleOnChange} />
            <Select SelectOptions={selectOptions} setSelected={setSelected} />
          </div>
          <article className="w-11/12 gap-y-9 max-w-[1920px] m-auto mt-9 md:mt-16 grid grid-cols-225 xxl:grid-cols-4 md:gap-14">
            {isLoading && <CountrySkeletonWrapper />}
            {!isLoading &&
              dataFilter?.map((value) => {
                return (
                  <Country
                    key={value.name.common}
                    image={value.flags.svg}
                    name={value.name.common}
                    population={value.population}
                    region={value.region}
                    capital={value.capital}
                  />
                );
              })}
          </article>
        </main>
      </div>
    </Main>
  );
}

export default App;
