import { useState } from "react";
import Section from "./components/Section";
import Header from "./components/Header";
import Content from "./components/Content";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "Zjeść obiad.", done: true },
        { id: 2, content: "Nauczyć się Reacta.", done: false }
    ]);

    const [hideDoneTasks, setHideDoneTasks] = useState(false);

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
        if (tasks.some(({ content }) => content === taskContent.trim())) {
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
                    bottomBox="list__box list__box--no-line"
                    extraContentBottom={<Form addNewTask={addNewTask} existTask={existTask} />}
                />
                <Content
                    topBox="list__box list__box--flex"
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
                        />
                    }
                />
            </Section>
        </main>
    );
}

export default App;
