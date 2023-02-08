import "./style.css";

const ToggleButton = ({ darkMode, toggleDarkMode }) => (
    <>
        <input
            type="checkbox"
            className="list__toggle-button-content"
            id="toggle-button"
            checked={darkMode}
            onChange={() => toggleDarkMode()}
        />
        <label
            className="list__toggle-button"
            htmlFor="toggle-button"
        />
    </>
);

export default ToggleButton;
