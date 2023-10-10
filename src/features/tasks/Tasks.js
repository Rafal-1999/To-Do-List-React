import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import { useTasks } from "../../hooks/useTasks";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Content from "../../components/Content";
import ToggleButton from "../../components/ToggleButton";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Footer from "../../components/Footer";
import "../../fontello/css/fontello.css";
// import { lightTheme, darkTheme } from "./themes";

const Tasks = () => {
    // const [darkMode, setDarkMode] = useState(
    const [theme, setTheme] = useState(
        // JSON.parse(localStorage.getItem("darkMode") || false)
        JSON.parse(localStorage.getItem("theme") || false)
    );

    useEffect(() => {
        // localStorage.setItem("darkMode", JSON.stringify(darkMode));
        localStorage.setItem("theme", JSON.stringify(theme));

        // changeDarkMode(darkMode);
    }, [theme]);

    const toggleTheme = () => {
        // setDarkMode(darkMode => !darkMode);
        // setTheme(theme ? lightTheme : darkTheme);
    };

    // const changeDarkMode = (isDarkMode) => {
    //     const bodyElement = document.body;

    //     if (isDarkMode) {
    //         bodyElement.classList.add("dark");
    //     } else {
    //         bodyElement.removeAttribute("class");
    //     }
    // };

    const { tasks } = useSelector(selectTasks);

    const { existTask, smoothCrossOutTask } = useTasks();

    return (
        // Homework from the module 8 Frontend Developer
        <>
            <main>
                <Section>
                    <Header title="Lista zadań" />
                    <Content
                        isLayout
                        title="Dodaj nowe zadanie"
                        extraContentTop={
                            <ToggleButton
                                theme={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                        extraContentBottom={
                            <Form existTask={existTask} />
                        }
                    />
                    <Content
                        isVertical
                        title="Lista zadań"
                        extraContentTop={
                            <Buttons />
                        }
                        extraContentBottom={
                            <TasksList smoothCrossOutTask={smoothCrossOutTask} />
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
