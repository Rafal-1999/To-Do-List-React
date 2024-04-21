import Header from "../components/Header";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import TasksFeature from "../features/tasks/Tasks";

const Tasks = () => (
    <>
        <Header
            title="Lista zadań"
            extraElement={
                <ThemeToggle />
            }
        />
        <main>
            <TasksFeature />
        </main>
    </>
);

export default Tasks;
