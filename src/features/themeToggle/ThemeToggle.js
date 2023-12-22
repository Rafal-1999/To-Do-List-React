import { useState, useEffect } from "react";
import { StyledThemeToggle } from "./styled";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setThemeMode("light");
    }, []);

    const setThemeMode = themeMode => {
        localStorage.setItem("theme", themeMode);
        setTheme(themeMode);
    };

    const toggleTheme = () => {
        theme === "light" ? setThemeMode("dark") : setThemeMode("light");
    };

    return (
        <StyledThemeToggle
            currentTheme={theme}
            aria-label={`Przełącz motyw na ${theme === "light" ? "ciemny" : "jasny"}`}
            onClick={() => toggleTheme()}
        />
    )
};

export default ThemeToggle;
