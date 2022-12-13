import { useNavigate } from "react-router-dom";

type CountryProps = {
  image: string;
  name: string;
  population: string;
  region: string[];
  capital: string;
};
export default function Country(props: CountryProps) {
  const navigate = useNavigate();
  const semiBold = "font-semibold mr-1";
  const handleOnClick = () => {
    navigate(`/${props.name.toLowerCase()}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className="flex flex-col h-full bg-s-white shadow-md rounded-md dark:bg-s-dm-dark-blue dark:text-s-lm-very-light-gray mb-2"
    >
      <div className="w-full">
        <img
          className="w-full aspect-video object-fill rounded-md"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col p-5 font-nunito-sans">
        <span className="font-extrabold">{props.name}</span>
        <div className="mt-3">
          <span className={semiBold}>Population:</span>
          <span>{props.population}</span>
        </div>
        <div>
          <span className={semiBold}>Region:</span>
          <span>{props.region}</span>
        </div>
        <div>
          <span className={semiBold}>Capital:</span>
          <span>{props.capital}</span>
        </div>
      </div>
    </div>
  );
}
