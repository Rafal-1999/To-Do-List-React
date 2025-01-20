import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";

const ThemeContextCreate = createContext();

export const useTheme = () => useContext(ThemeContextCreate);

export const ThemeContext = ({ children }) => {
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

    const currentTheme = theme === "light" ? light : dark;

    return (
        <ThemeContextCreate.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContextCreate.Provider>
    )
};
