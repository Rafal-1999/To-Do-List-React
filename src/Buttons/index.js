import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="list__options">
            <button className="list__option-button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="list__option-button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;
