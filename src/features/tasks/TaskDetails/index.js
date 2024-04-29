import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Section from "../../../components/Section";
import Content from "../../../components/Content";
import { TaskDetail } from "./styled";

const Task = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Section>
            {task ? (
                <Content
                    title={task.content}
                    extraContentBottom={
                        <TaskDetail>
                            <strong>Ukończone: </strong>{task.done ? "Tak" : "Nie"}
                        </TaskDetail>
                    }
                />
            ) : (
                <Content title="Sorka, nie ma takiego zadania 😜" />
            )}
        </Section>
    )
};

export default Task;
