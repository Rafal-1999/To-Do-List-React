import { useDispatch } from "react-redux";
import Section from "../../components/Section";
import Content from "../../components/Content";
import Form from "./Form";
import Search from "./Search";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { Box, Button } from "./styled";
import { fetchExampleTasks } from "./tasksSlice";

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
                title="Wyszukiwarka"
                extraContentBottom={
                    <Search />
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
