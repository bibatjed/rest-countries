import { useEffect, useMemo, useState } from "react";
import HTTPCountry from "../service/http";

export type Country = {
  name: {
    official: string;
    common: string;
  };
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  population: string;
  region: string[];
};

export default function useCountries() {
  const [data, setData] = useState<Country[] | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    HTTPCountry.getAllCountry()
      .then((data) => setData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const dataFilter = useMemo(() => {
    return data?.filter((value) => {
      if (value.name.official.toLowerCase().search(search.toLowerCase()) > -1) {
        return value;
      }
    });
  }, [search, data]);
  useEffect(() => {
    if (selected) {
      setIsLoading(true);
      HTTPCountry.getCountryByRegion(selected)
        .then((data) => setData(data))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selected]);

  return { dataFilter, setSelected, setSearch, isLoading };
}
