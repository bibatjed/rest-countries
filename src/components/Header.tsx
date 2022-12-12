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
    <div className="p-5 dark:bg-s-dm-dark-blue flex justify-between items-center bg-s-white border-b-2 border-b-s-lm-very-light-gray dark:border-b-s-dm-dark-blue">
      <h1 className="text-base dark:text-s-lm-very-light-gray font-nunito-sans font-extrabold">
        Where in the world?
      </h1>
      <button onClick={handleChangeTheme} className="flex items-center gap-2">
        <MdDarkMode className="dark:text-s-lm-very-light-gray" />
        <span className="text-sm dark:text-s-lm-very-light-gray font-nunito-sans font-semibold">
          Dark Mode
        </span>
      </button>
    </div>
  );
}
