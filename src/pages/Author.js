import Header from "../components/Header";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import Section from "../components/Section";
import Content from "../components/Content";

const Author = () => (
    <>
        <Header
            title="O autorze"
            extraElement={
                <ThemeToggle />
            }
        />
        <main>
            <Section>
                <Content
                    title="Rafał Chudy - Junior Frontend Developer"
                    extraContentBottom={
                        <p>Tekst</p>
                    }
                />
            </Section>
        </main>
    </>
);

export default Author;
