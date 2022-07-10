import "./fontello/css/fontello.css";
import "./style.css";

const Tasks = (props) => (
    <ul className="list__tasks">
        {props.tasks.map(task => (
            <li className={`list__tasks-item${task.done && props.hideDoneTasks ? " list__tasks-item--done" : ""}`}
                key={task.id}>
                <button className="list__action-button list__action-button--done">
                    {task.done ? <i className="icon-check list__icon"></i> : ""}
                </button>
                <p className="list__paragraph">
                    <span className={`list__tasks-content${task.done ? " list__tasks-content--done" : ""}`}>
                        {task.content}
                    </span>
                </p>
                <button className="list__action-button list__action-button--remove">
                    <i className="icon-trash-empty list__icon"></i>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;