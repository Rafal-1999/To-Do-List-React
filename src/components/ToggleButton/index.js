import "./style.css";

const ToggleButton = ({ toggleDarkMode }) => (
    <>
        <input
            type="checkbox"
            className="list__toggle-button-content"
            id="toggle-button"
            onClick={() => toggleDarkMode()}
        />
        <label
            className="list__toggle-button"
            htmlFor="toggle-button"
        />
    </>
);

export default ToggleButton;
