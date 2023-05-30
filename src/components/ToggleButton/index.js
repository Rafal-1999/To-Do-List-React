import { ToggleButtonLabel, ToggleButtonCheckbox } from "./styled";

const ToggleButton = ({ darkMode, toggleTheme }) => (
    <>
        <ToggleButtonCheckbox
            type="checkbox"
            id="toggle-button"
            checked={darkMode}
            onChange={() => toggleTheme()}
        />
        <ToggleButtonLabel
            htmlFor="toggle-button"
        />
    </>
);

export default ToggleButton;
