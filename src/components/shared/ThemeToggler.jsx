import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("theme") || THEMES.LIGHT;
    }
    return THEMES.LIGHT;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  return (
    <div
      className={`flex justify-center items-center ${theme===THEMES.LIGHT ?"bg-white":"bg-black/70"} w-8 h-8 rounded-full`}
    >
      <button className="text-lg p-2 rounded-full" onClick={toggleTheme}>
        {theme === THEMES.LIGHT ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      </button>
    </div>
  );
}
export default ThemeToggle;
