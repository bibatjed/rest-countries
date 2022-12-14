import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Country } from "../hooks/useCountries";
import { BiArrowBack } from "react-icons/bi";
import Main from "../components/Main";

type DetailedPage = {
  languages: any;
  subregion: string;
  tld: string[];
  currencies: any;
  borders: string[];
  name: {
    nativeName: any;
  };
} & Country;
export default function DetailedPage() {
  const params = useParams();
  const [data, setData] = useState<DetailedPage[]>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${params.id}?fullText=true`)
      .then(async (data) => {
        if (!data.ok) {
          //debugger
          return fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
            .then((data) => {
              if (!data.ok) {
                throw data;
              }
              return data.json();
            })
            .then((data) => {
              return data;
            })
            .catch((e) => {
              throw e;
            });
        } else {
          return data.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return <>loading...</>;
  }
  if (data?.length === 0) {
    return <>not found...</>;
  }

  const [detailedData] = data || [];
  const lastLanguage = Object.keys(detailedData?.languages || {}).at(-1);
  const currency = Object.keys(detailedData?.currencies || {}).at(-1);
  const semiBold = "font-semibold mr-1";
  return (
    <Main>
      <div className="bg-s-lm-very-light-gray p-1 dark:bg-s-dm-very-dark-blue dark:text-s-lm-very-light-gray font-nunito-sans min-h-screen">
        <div className="w-11/12 m-auto mt-5">
          {" "}
          <button
            onClick={() => navigate(-1)}
            className="flex gap-3 items-center p-3 shadow-lg dark:bg-s-dm-dark-blue rounded-sm bg-s-white "
          >
            <BiArrowBack size="20" />
            <span className="font-semibold text-base">Back</span>
          </button>
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10 lg:justify-start lg:gap-28 gap-7 mt-12">
            <img
              src={detailedData?.flags?.svg}
              alt={detailedData?.name?.common}
              className="w-full md:w-3/6 aspect-video object-cover max-w-[900px]"
            />
            <div className="md:self-center grid gap-7 md:grid-cols-2 md:gap-0 md:grid-rows-[50px_180px_100px] lg:gap-x-24 lg:gap-y-2">
              <span className="text-xl font-extrabold md:col-span-2 lg:text-3xl">
                {detailedData?.name?.common}
              </span>

              {/* Native name info */}
              <div className="md:col-span-1">
                <div>
                  <span className={semiBold}>Native Name:</span>
                  <span>
                    {
                      detailedData?.name?.nativeName[lastLanguage as string]
                        ?.common
                    }
                  </span>
                </div>
                <div>
                  <span className={semiBold}>Population:</span>
                  <span>{detailedData?.population}</span>
                </div>
                <div>
                  <span className={semiBold}>Region:</span>
                  <span>{detailedData?.region}</span>
                </div>
                <div>
                  <span className={semiBold}>Sub Region:</span>
                  <span>{detailedData?.subregion}</span>
                </div>
                <div>
                  <span className={semiBold}>Capital:</span>
                  <span>{detailedData?.capital}</span>
                </div>
              </div>

              {/* TLD */}
              <div className="md:col-span-1">
                <div>
                  <span className={semiBold}>Top Level Domain:</span>
                  <span>{detailedData?.tld?.toString()}</span>
                </div>
                <div>
                  <span className={semiBold}>Currencies:</span>
                  <span>
                    {detailedData?.currencies?.[currency as string].name}
                  </span>
                </div>
                <div>
                  <span className={semiBold}>Languages: </span>
                  <span>
                    {Object.values(detailedData?.languages || {})?.toString()}
                  </span>
                </div>
              </div>

              {/*border countries  */}

              <div className="mb-2 flex flex-col gap-2 md:items-center  md:col-span-2 md:flex-row md:flex-wrap">
                <span className="text-base font-semibold">
                  Border Countries:
                </span>
                <div className="grid grid-cols-110 gap-3 md:gap-1 md:flex md:flex-row md:flex-wrap">
                  {detailedData?.borders?.map((value) => {
                    return (
                      <>
                        <button
                          onClick={() => navigate(`/${value.toLowerCase()}`)}
                          className="p-2 bg-s-white dark:bg-s-dm-dark-blue px-6 shadow-lg w-28 md:px-1 md:w-20 md:p-1 "
                        >
                          {value}
                        </button>
                      </>
                    );
                  }) || <span>None</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
