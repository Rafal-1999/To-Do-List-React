import { ToggleButtonLabel, ToggleButtonCheckbox } from "./styled";

const ToggleButton = ({ darkMode, toggleDarkMode }) => (
    <>
        <ToggleButtonCheckbox
            type="checkbox"
            id="toggle-button"
            checked={darkMode}
            onChange={() => toggleDarkMode()}
        />
        <ToggleButtonLabel
            htmlFor="toggle-button"
        />
    </>
);

export default ToggleButton;
