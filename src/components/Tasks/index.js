import ReactTooltip from "react-tooltip";
import "./fontello/css/fontello.css";
import "./style.css";

const Tasks = ({
    tasks,
    hideDoneTasks,
    toggleDoneTask,
    removeTask,
    smoothCrossOutTask
}) => (
    <ul className="list__tasks">
        {tasks.map(task => (
            <li
                className={`list__tasks-item${task.done && hideDoneTasks ? " list__tasks-item--done" : ""}`}
                key={task.id}
            >
                <button
                    type="button"
                    className="list__action-button list__action-button--done"
                    data-for="action-button1"
                    data-tip={`${task.done ? "Wznów" : "Ukończ"} zadanie`}
                    onClick={() => toggleDoneTask(task.id)}
                >
                    {task.done && <i className="icon-check list__icon" />}
                </button>
                <ReactTooltip
                    id="action-button1"
                    className="list__tooltip"
                    textColor="rgb(255, 255, 255)"
                    backgroundColor="rgb(28, 28, 28)"
                    arrowColor="rgb(28, 28, 28)"
                    place="top"
                    effect="solid"
                    delayShow={200}
                    delayHide={200}
                />
                <p className="list__paragraph">
                    <span
                        className={`list__tasks-content${task.done ? " list__tasks-content--done" : ""}`}
                        style={{ transitionDuration: smoothCrossOutTask(task) }}
                    >
                        {task.content}
                    </span>
                </p>
                <button
                    type="button"
                    className="list__action-button list__action-button--remove"
                    data-for="action-button2"
                    data-tip="Usuń zadanie"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="icon-trash-empty list__icon" />
                </button>
                <ReactTooltip
                    id="action-button2"
                    className="list__tooltip"
                    textColor="rgb(255, 255, 255)"
                    backgroundColor="rgb(28, 28, 28)"
                    arrowColor="rgb(28, 28, 28)"
                    place="top"
                    effect="solid"
                    delayShow={200}
                    delayHide={200}
                />
            </li>
        ))}
    </ul>
);

export default Tasks;
