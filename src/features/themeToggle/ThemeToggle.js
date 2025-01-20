import { useTheme } from "../../ThemeContext";
import { StyledThemeToggle } from "./styled";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <StyledThemeToggle
            currentTheme={theme}
            aria-label={`Przełącz motyw na ${theme === "light" ? "ciemny" : "jasny"}`}
            onClick={() => toggleTheme()}
        />
    )
};

export default ThemeToggle;
