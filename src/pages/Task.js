import Header from "../components/Header";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import TaskDetails from "../features/tasks/TaskDetails";

const Task = () => (
    <>
        <Header
            title="Szczegóły zadania"
            extraElement={
                <ThemeToggle />
            }
        />
        <main>
            <TaskDetails />
        </main>
    </>
);

export default Task;
