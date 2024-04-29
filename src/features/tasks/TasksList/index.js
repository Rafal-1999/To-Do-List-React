import { useSelector, useDispatch } from "react-redux";
import { useTasks } from "../../../hooks/useTasks";
import { selectTasksState, toggleDoneTask, removeTask } from "../tasksSlice";
import {
    TasksArea,
    TasksItem,
    ButtonIcon,
    ActionButton,
    TasksParagraph,
    TasksContent,
    TasksLink,
    ReactTooltipStyled,
    TasksInfo
} from "./styled";

const TasksList = () => {
    const { smoothCrossOutTask } = useTasks();

    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 ? (
            <TasksArea>
                {tasks.map(task => (
                    <TasksItem
                        done={task.done && hideDone}
                        key={task.id}
                    >
                        <ActionButton
                            done
                            type="button"
                            aria-label="Ukończ lub wznów zadanie"
                            data-for="toggleTaskDoneTooltip"
                            data-tip={`${task.done ? "Wznów" : "Ukończ"} zadanie`}
                            onClick={() => dispatch(toggleDoneTask(task.id))}
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
                                <TasksLink to={`/zadania/${task.id}`} title="Przejdź do szczegółów zadania">
                                    {task.content}
                                </TasksLink>
                            </TasksContent>
                        </TasksParagraph>
                        <ActionButton
                            remove
                            type="button"
                            aria-label="Usuń zadanie"
                            data-for="removeTaskTooltip"
                            data-tip="Usuń zadanie"
                            onClick={() => dispatch(removeTask(task.id))}
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
        ) : (
            <TasksInfo>Brak zadań</TasksInfo>
        )
    )
};

export default TasksList;
