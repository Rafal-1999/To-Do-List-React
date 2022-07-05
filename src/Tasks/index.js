const Tasks = (props) => (
    <ul className="list__tasks">
        {props.tasks.map(task => (
            <li key={task.id}>
                {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;