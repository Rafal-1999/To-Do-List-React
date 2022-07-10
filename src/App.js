import Header from "./Header";
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
                <div className="list__block">
                    <div className="list__box">
                        <h2 className="list__header">
                            Dodaj nowe zadanie
                        </h2>
                    </div>
                    <div className="list__box list__box--no-line">
                        <Form />
                    </div>
                </div>
                <div className="list__block">
                    <div className="list__box list__box--flex">
                        <h2 className="list__header">
                            Lista zadań
                        </h2>
                        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
                    </div>
                    <div className="list__tasks-block">
                        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
