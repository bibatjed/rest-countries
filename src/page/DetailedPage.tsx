import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Country } from "../hooks/useCountries";
import { BiArrowBack } from "react-icons/bi";
import Main from "../components/Main";
import DetailedPageSkeletion from "../components/DetailedPageSkeleton";
import { useQuery } from "react-query";
import HTTPCountry from "../service/http";

type TypeDetailedPage = {
  languages: any;
  subregion: string;
  tld: string[];
  currencies: any;
  borders: string[];
  name: {
    nativeName: any;
  };
} & Country;

async function fetchCountryByName(name: string) {
  return HTTPCountry.getCountryByName(name);
}
export default function DetailedPage() {
  const params = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useQuery<TypeDetailedPage[]>({
    queryKey: ["name", params.id],
    queryFn: () => fetchCountryByName(params.id as string),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const navigate = useNavigate();

  if (error) {
    return <>Error...</>;
  }

  const [detailedData] = data || [];
  const lastLanguage = Object.keys(detailedData?.languages || {}).at(-1);
  const currency = Object.keys(detailedData?.currencies || {}).at(-1);
  const semiBold = "font-semibold mr-1";
  return (
    <Main>
      <div className="transition-all duration-500 bg-s-lm-very-light-gray p-1 dark:bg-s-dm-very-dark-blue dark:text-s-lm-very-light-gray font-nunito-sans min-h-screen">
        <main className="w-11/12 m-auto max-w-[1920px] mt-5">
          {" "}
          <button
            onClick={() => {
              if (location.key === "default") {
                return navigate("/");
              }
              navigate(-1);
            }}
            className="transition-all duration-500 flex gap-3 items-center p-3 shadow-lg dark:bg-s-dm-dark-blue rounded-sm bg-s-white "
          >
            <BiArrowBack size="20" />
            <span className="font-semibold text-base">Back</span>
          </button>
          <article className="flex flex-col md:flex-row md:justify-between md:gap-10 lg:justify-start lg:gap-28 gap-7 mt-12">
            {isLoading && <DetailedPageSkeletion />}
            {!isLoading && (
              <>
                <img
                  src={detailedData?.flags?.svg}
                  alt={detailedData?.name?.common}
                  className="w-full md:w-3/6 aspect-video flex-grow object-cover max-w-[1000px]"
                />
                <article className="md:self-center grid gap-7 md:grid-cols-2 md:gap-0 md:grid-rows-[50px_180px_100px] lg:gap-x-24 lg:gap-y-2">
                  <span className="text-xl font-extrabold md:col-span-2 lg:text-3xl">
                    {detailedData?.name?.common}
                  </span>

                  {/* Native name info */}
                  <article className="md:col-span-1">
                    <article>
                      <span className={semiBold}>Native Name:</span>
                      <span>
                        {
                          detailedData?.name?.nativeName[lastLanguage as string]
                            ?.common
                        }
                      </span>
                    </article>
                    <article>
                      <span className={semiBold}>Population:</span>
                      <span>{detailedData?.population}</span>
                    </article>
                    <article>
                      <span className={semiBold}>Region:</span>
                      <span>{detailedData?.region}</span>
                    </article>
                    <article>
                      <span className={semiBold}>Sub Region:</span>
                      <span>{detailedData?.subregion}</span>
                    </article>
                    <article>
                      <span className={semiBold}>Capital:</span>
                      <span>{detailedData?.capital}</span>
                    </article>
                  </article>

                  {/* TLD */}
                  <article className="md:col-span-1">
                    <article>
                      <span className={semiBold}>Top Level Domain:</span>
                      <span>{detailedData?.tld?.toString()}</span>
                    </article>
                    <article>
                      <span className={semiBold}>Currencies:</span>
                      <span>
                        {detailedData?.currencies?.[currency as string].name}
                      </span>
                    </article>
                    <article>
                      <span className={semiBold}>Languages: </span>
                      <span>
                        {Object.values(
                          detailedData?.languages || {}
                        )?.toString()}
                      </span>
                    </article>
                  </article>

                  {/*border countries  */}

                  <article className="mb-2 flex flex-col gap-2 md:items-center  md:col-span-2 md:flex-row md:flex-wrap">
                    <span className="text-base font-semibold">
                      Border Countries:
                    </span>
                    <article className="grid grid-cols-110 gap-3 md:gap-1 md:flex md:flex-row md:flex-wrap">
                      {detailedData?.borders?.map((value) => {
                        return (
                          <>
                            <button
                              onClick={() =>
                                navigate(`/${value.toLowerCase()}`)
                              }
                              className="transition-all duration-500 p-2 bg-s-white dark:bg-s-dm-dark-blue px-6 shadow-lg w-28 md:px-1 md:w-20 md:p-1 "
                            >
                              {value}
                            </button>
                          </>
                        );
                      }) || <span>None</span>}
                    </article>
                  </article>
                </article>
              </>
            )}
          </article>
        </main>
      </div>
    </Main>
  );
}
