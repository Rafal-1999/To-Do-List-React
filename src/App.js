import { useState } from "react";
import Section from "./components/Section";
import Header from "./components/Header";
import Content from "./components/Content";
import ToggleButton from "./components/ToggleButton";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "Zjeść obiad.", done: true },
        { id: 2, content: "Nauczyć się Reacta.", done: false }
    ]);

    const [hideDoneTasks, setHideDoneTasks] = useState(false);

    const toggleDarkMode = () => {
        const bodyElement = document.body;
        bodyElement.classList.toggle("dark");
        return bodyElement.className === "" ? bodyElement.removeAttribute("class") : null;
    };

    const addNewTask = (taskContent) => {
        setTasks(tasks => [
            ...tasks, {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content: taskContent,
                done: false
            }
        ])
    };

    const isTaskEmpty = (taskContent) => taskContent.length !== 0;

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
        <main>
            <Section>
                <Header title="Lista zadań" />
                <Content
                    topBox="list__box"
                    title="Dodaj nowe zadanie"
                    extraContentTop={
                        <ToggleButton
                            toggleDarkMode={toggleDarkMode}
                        />
                    }
                    bottomBox="list__box list__box--layout"
                    extraContentBottom={
                        <Form
                            addNewTask={addNewTask}
                            isTaskEmpty={isTaskEmpty}
                            existTask={existTask}
                        />
                    }
                />
                <Content
                    topBox="list__box list__box--vertical"
                    title="Lista zadań"
                    extraContentTop={
                        <Buttons
                            tasks={tasks}
                            hideDoneTasks={hideDoneTasks}
                            hideAllDoneTasks={hideAllDoneTasks}
                            completeAllTasks={completeAllTasks}
                        />
                    }
                    bottomBox="list__tasks-block"
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
    );
}

export default App;
