import { useDispatch } from "react-redux";
import Section from "../../components/Section";
import Content from "../../components/Content";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { Box, Button } from "../../components/styled";
import { fetchExampleTasks } from "./tasksSlice";
import "../../fontello/css/fontello.css";

const Tasks = () => {
    const dispatch = useDispatch();

    return (
        <Section>
            <Content
                isVertical
                title="Dodaj nowe zadanie"
                extraContentTop={
                    <Box>
                        <Button onClick={() => dispatch(fetchExampleTasks())}>
                            Pobierz przykładowe zadania
                        </Button>
                    </Box>
                }
                extraContentBottom={
                    <Form />
                }
            />
            <Content
                isVertical
                title="Lista zadań"
                extraContentTop={
                    <Buttons />
                }
                extraContentBottom={
                    <TasksList />
                }
            />
        </Section>
    );
}

export default Tasks;
