import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

type Country = {
  name: {
    official: string;
  };
};
function App() {
  const [data, setData] = useState<Country[] | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (selected) {
      console.log("hello");
      fetch(`https://restcountries.com/v3.1/region/${selected}`)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [selected]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={handleOnChange} /> search for country
      <select value={selected} onChange={handleOnChangeSelect}>
        <option disabled={true} value="">
          choose
        </option>
        <option value="africa">africa</option>
        <option value="europe">europe</option>
        <option value="asia">asia</option>
        <option value="america">america</option>
        <option value="oceania">oceania</option>
      </select>
      {/* {JSON.stringify(
        data?.filter((value) => {
          if (
            value.name.official.toLowerCase().search(search.toLowerCase()) > -1
          ) {
            return value;
          }
        })
      )} */}
    </div>
  );
}

export default App;
