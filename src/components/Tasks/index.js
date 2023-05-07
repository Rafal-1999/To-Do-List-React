import {
    TasksArea,
    TasksItem,
    ButtonIcon,
    ActionButton,
    TasksParagraph,
    TasksContent,
    ReactTooltipStyled
} from "./styled";

const Tasks = ({
    tasks,
    hideDoneTasks,
    toggleDoneTask,
    removeTask,
    smoothCrossOutTask
}) => (
    <TasksArea>
        {tasks.map(task => (
            <TasksItem
                className={`${task.done && hideDoneTasks ? " list__tasks-item--done" : ""}`}
                key={task.id}
            >
                <ActionButton
                    done
                    type="button"
                    data-for="toggleTaskDoneTooltip"
                    data-tip={`${task.done ? "Wznów" : "Ukończ"} zadanie`}
                    onClick={() => toggleDoneTask(task.id)}
                >
                    {task.done && <ButtonIcon className="icon-check" />}
                </ActionButton>
                <ReactTooltipStyled
                    id="toggleTaskDoneTooltip"
                    textColor="rgb(255, 255, 255)"
                    backgroundColor="rgb(28, 28, 28)"
                    arrowColor="rgb(28, 28, 28)"
                    place="top"
                    effect="solid"
                    delayShow={200}
                    delayHide={200}
                />
                <TasksParagraph>
                    <TasksContent
                        done={task.done}
                        transitionTime={smoothCrossOutTask(task)}
                    >
                        {task.content}
                    </TasksContent>
                </TasksParagraph>
                <ActionButton
                    remove
                    type="button"
                    data-for="removeTaskTooltip"
                    data-tip="Usuń zadanie"
                    onClick={() => removeTask(task.id)}
                >
                    <ButtonIcon className="icon-trash-empty" />
                </ActionButton>
                <ReactTooltipStyled
                    id="removeTaskTooltip"
                    textColor="rgb(255, 255, 255)"
                    backgroundColor="rgb(28, 28, 28)"
                    arrowColor="rgb(28, 28, 28)"
                    place="top"
                    effect="solid"
                    delayShow={200}
                    delayHide={200}
                />
            </TasksItem>
        ))}
    </TasksArea>
);

export default Tasks;
