import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { useQueryParameter } from "../queryParameters";
import { useTasks } from "../../../hooks/useTasks";
import {
    selectTasksByQuery,
    selectHideDone,
    toggleDoneTask,
    removeTask
} from "../tasksSlice";
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
    const query = useQueryParameter("szukaj");
    const { smoothCrossOutTask } = useTasks();
    const theme = useTheme();

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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
                            textColor={theme.tooltip.color}
                            backgroundColor={theme.tooltip.background}
                            arrowColor={theme.tooltip.background}
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
                            textColor={theme.tooltip.color}
                            backgroundColor={theme.tooltip.background}
                            arrowColor={theme.tooltip.background}
                            place="top"
                            effect="solid"
                            delayShow={200}
                            delayHide={200}
                        />
                    </TasksItem>
                ))}
            </TasksArea>
        ) : (
            <TasksInfo>
                {query ? "Nie znaleziono zadania o podanej treści" : "Brak zadań"}
            </TasksInfo>
        )
    )
};

export default TasksList;
