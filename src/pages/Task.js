import Header from "../components/Header";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import Section from "../components/Section";
import Content from "../components/Content";

const Task = () => {
    return (
        <>
            <Header
                title="Szczegóły zadania"
                extraElement={<ThemeToggle />}
            />
            <main>
                <Section>
                    <Content
                        title={"Treść zadania"}
                        extraContentBottom={
                            <p><span>Ukończone: </span>{"Tak lub Nie"}</p>
                        }
                    />
                </Section>
            </main>
        </>
    )
};

export default Task;
