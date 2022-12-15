import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useLocalStorage } from "usehooks-ts";
export default function Header() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const handleChangeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <header className="flex justify-center items-center dark:bg-s-dm-dark-blue bg-s-white border-b-2 border-b-s-lm-very-light-gray dark:border-b-s-dm-dark-blue">
      <div className="w-11/12 max-w-[1920px] flex justify-between items-center p-5">
        <h1 className="text-base md:text-lg dark:text-s-lm-very-light-gray font-nunito-sans font-extrabold">
          Where in the world?
        </h1>
        <button onClick={handleChangeTheme} className="flex items-center gap-2">
          <MdDarkMode size="20" className="dark:text-s-lm-very-light-gray" />
          <span className="text-sm md:text-base dark:text-s-lm-very-light-gray font-nunito-sans font-semibold">
            Dark Mode
          </span>
        </button>
      </div>
    </header>
  );
}
