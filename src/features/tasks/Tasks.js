import { useDispatch } from "react-redux";
import Section from "../../components/Section";
import Header from "../../components/Header";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Content from "../../components/Content";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Footer from "../../components/Footer";
import { Box, Button } from "../../components/styled";
import { fetchExampleTasks } from "./tasksSlice";
import "../../fontello/css/fontello.css";

const Tasks = () => {
    const dispatch = useDispatch();

    return (
        <>
            <main>
                <Section>
                    <Header
                        title="Lista zadań"
                        extraElement={
                            <ThemeToggle />
                        }
                    />
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
            </main>
            <Footer
                creator="Rafał Chudy"
                copyright="wszelkie prawa zastrzeżone"
                year="2022 - 2023"
                socialLink="https://github.com/Rafal-1999"
                socialName="GitHub"
                socialIcon="icon-github"
                email="rafalchu5@gmail.com"
            />
        </>
    );
}

export default Tasks;
