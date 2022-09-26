import "./style.css";

const ToggleButton = () => (
    <>
        <input
            type="checkbox"
            className="list__toggle-button-content"
            id="toggle-button"
        />
        <label
            className="list__toggle-button"
            htmlFor="toggle-button"
        />
    </>
);

export default ToggleButton;
