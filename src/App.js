import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./fontello/css/fontello.css";
import Section from "./components/Section";
import Header from "./components/Header";
import Content from "./components/Content";
import ToggleButton from "./components/ToggleButton";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";

function App() {
    // const [darkMode, setDarkMode] = useState(
    const [theme, setTheme] = useState(
        // JSON.parse(localStorage.getItem("darkMode") || false)
        JSON.parse(localStorage.getItem("theme") || false)
    );

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks") || [])
    );

    const [hideDoneTasks, setHideDoneTasks] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        // localStorage.setItem("darkMode", JSON.stringify(darkMode));
        localStorage.setItem("theme", JSON.stringify(theme));

        // changeDarkMode(darkMode);
    }, [theme]);

    const toggleTheme = () => {
        // setDarkMode(darkMode => !darkMode);
        setTheme(theme ? lightTheme : darkTheme);
    };

    // const changeDarkMode = (isDarkMode) => {
    //     const bodyElement = document.body;

    //     if (isDarkMode) {
    //         bodyElement.classList.add("dark");
    //     } else {
    //         bodyElement.removeAttribute("class");
    //     }
    // };

    const addNewTask = (taskContent) => {
        setTasks(tasks => [
            ...tasks, {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content: taskContent,
                done: false
            }
        ])
    };

    const existTask = (taskContent) => {
        if (tasks.some(({ content }) => content === taskContent)) {
            alert("Podane zadanie jest już na liście.");
            return true;
        }
    };

    const hideAllDoneTasks = () => {
        setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    };

    const completeAllTasks = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true
        })))
    };

    const toggleDoneTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            }
            return task;
        }))
    };

    const smoothCrossOutTask = (task) => {
        const lengthTaskContent = task.content.length;
        const result = `${((lengthTaskContent / 10) * 0.1).toFixed(1)}s`;
        return result;
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(
            task => task.id !== id
        ))
    };

    return (
        // Homework from the module 8 Frontend Developer
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <main>
                <Section>
                    <Header title="Lista zadań" />
                    <Content
                        classNameTopBox="list__box"
                        title="Dodaj nowe zadanie"
                        extraContentTop={
                            <ToggleButton
                                theme={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                        isLayout
                        classNameBottomBox="list__box list__box--layout"
                        extraContentBottom={
                            <Form
                                addNewTask={addNewTask}
                                existTask={existTask}
                            />
                        }
                    />
                    <Content
                        isVertical
                        classNameTopBox="list__box list__box--vertical"
                        title="Lista zadań"
                        extraContentTop={
                            <Buttons
                                tasks={tasks}
                                hideDoneTasks={hideDoneTasks}
                                hideAllDoneTasks={hideAllDoneTasks}
                                completeAllTasks={completeAllTasks}
                            />
                        }
                        isBlock
                        classNameBottomBox="list__tasks-block"
                        extraContentBottom={
                            <Tasks
                                tasks={tasks}
                                hideDoneTasks={hideDoneTasks}
                                toggleDoneTask={toggleDoneTask}
                                removeTask={removeTask}
                                smoothCrossOutTask={smoothCrossOutTask}
                            />
                        }
                    />
                </Section>
            </main>
            <Footer
                creator="Rafał Chudy"
                designer="YouCode"
                copyright="wszelkie prawa zastrzeżone"
                year="2022"
                socialLink="https://github.com/Rafal-1999"
                socialName="GitHub"
                socialIcon="icon-github"
                email="rafalchu5@gmail.com"
            />
        </ThemeProvider>
    );
}

export default App;
