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
    <button className="text-lg p-2 rounded-full" onClick={toggleTheme}>
      {theme === THEMES.LIGHT ? <MdDarkMode /> : <MdLightMode/>}
    </button>
  );
}
export default ThemeToggle;
