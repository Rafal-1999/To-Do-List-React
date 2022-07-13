import Header from "./Header";
import Block from "./Block";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
    { id: 1, content: "Zjeść obiad.", done: true },
    { id: 2, content: "Nauczyć się Reacta.", done: false }
];

const hideDoneTasks = false;

function App() {
    return (
        // Homework from the module 8 Frontend Developer
        <main>
            <section className="list">
                <Header title="Lista zadań" />
                <Block
                    boxClass1="list__box"
                    title="Dodaj nowe zadanie"
                    boxClass2="list__box list__box--no-line"
                    extraContent2={<Form />}
                />
                <Block
                    boxClass1="list__box list__box--flex"
                    title="Lista zadań"
                    extraContent1={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                    boxClass2="list__tasks-block"
                    extraContent2={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                />
            </section>
        </main>
    );
}

export default App;
