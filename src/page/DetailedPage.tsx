import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailedPage() {
  const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.id}?fullText=true`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return <>{JSON.stringify(data)}</>;
}
