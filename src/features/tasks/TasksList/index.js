import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleDoneTask, removeTask } from "../tasksSlice";
import {
    TasksArea,
    TasksItem,
    ButtonIcon,
    ActionButton,
    TasksParagraph,
    TasksContent,
    ReactTooltipStyled,
    TasksInfo
} from "./styled";

const TasksList = ({ smoothCrossOutTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                                {task.content}
                            </TasksContent>
                        </TasksParagraph>
                        <ActionButton
                            remove
                            type="button"
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
