import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useTasks } from "./hooks/useTasks";
import Section from "./components/Section";
import Header from "./components/Header";
import Content from "./components/Content";
import ToggleButton from "./components/ToggleButton";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import "./fontello/css/fontello.css";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";

function App() {
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

    const {
        tasks,
        hideDoneTasks,
        addNewTask,
        existTask,
        hideAllDoneTasks,
        completeAllTasks,
        toggleDoneTask,
        smoothCrossOutTask,
        removeTask
    } = useTasks();

    return (
        // Homework from the module 8 Frontend Developer
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <main>
                <Section>
                    <Header title="Lista zadań" />
                    <Content
                        title="Dodaj nowe zadanie"
                        extraContentTop={
                            <ToggleButton
                                theme={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                        isLayout
                        extraContentBottom={
                            <Form
                                addNewTask={addNewTask}
                                existTask={existTask}
                            />
                        }
                    />
                    <Content
                        isVertical
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
