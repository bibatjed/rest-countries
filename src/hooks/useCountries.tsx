import { useMemo, useState } from "react";
import HTTPCountry from "../service/http";
import { useQuery } from "react-query";

export type Country = {
  name: {
    official: string;
    common: string;
  };
  capital: string;
  flags: {
    svg: string;
  };
  population: string;
  region: string[];
};

async function fetchCountries(region: string = "") {
  if (region) {
    return HTTPCountry.getCountryByRegion(region);
  }
  return HTTPCountry.getAllCountry();
}

export default function useCountries() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const { data, isLoading } = useQuery<Country[]>({
    queryKey: ["region", selected],
    queryFn: () => fetchCountries(selected),
    refetchOnWindowFocus: false,
  });

  const dataFilter = useMemo(() => {
    return data?.filter((value) => {
      if (value.name.official.toLowerCase().search(search.toLowerCase()) > -1) {
        return value;
      }
      return false;
    });
  }, [search, data]);

  return { dataFilter, setSelected, setSearch, isLoading };
}
