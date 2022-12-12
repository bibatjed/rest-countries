import { useEffect, useMemo, useState } from "react";
import HTTPCountry from "../service/http";

type Country = {
  name: {
    official: string;
  };
};

export default function useCountries() {
  const [data, setData] = useState<Country[] | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  useEffect(() => {
    HTTPCountry.getAllCountry().then((data) => setData(data));
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
      HTTPCountry.getCountryByRegion(selected).then((data) => setData(data));
    }
  }, [selected]);

  return { dataFilter, setSelected, setSearch };
}
