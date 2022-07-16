import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="list__options">
            <button className="list__option-button">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="list__option-button"
                disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;
