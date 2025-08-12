import { useEffect, useState } from "react";

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
    <button className="btn btn-outline" onClick={toggleTheme}>
      {theme === THEMES.LIGHT ? "Dark" : "Light"}
    </button>
  );
}
export default ThemeToggle;
