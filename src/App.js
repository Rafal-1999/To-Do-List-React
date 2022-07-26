import { useState } from "react";
import Section from "./Section";
import Header from "./Header";
import Content from "./Content";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const hideDoneTasks = false;

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "Zjeść obiad.", done: true },
        { id: 2, content: "Nauczyć się Reacta.", done: false }
    ]);

    const addNewTask = (taskContent) => {
        setTasks(tasks => [
            ...tasks, {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content: taskContent,
                done: false
            }
        ])
    };

    const completeAllTasks = () => {
        setTasks(tasks.map(task => ({
            ...task,
            done: true
        })))
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
                    extraContentBottom={<Form addNewTask={addNewTask} />}
                />
                <Content
                    topBox="list__box list__box--flex"
                    title="Lista zadań"
                    extraContentTop={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} completeAllTasks={completeAllTasks} />}
                    bottomBox="list__tasks-block"
                    extraContentBottom={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                />
            </Section>
        </main>
    );
}

export default App;
