import Section from "../components/Section";
import Header from "../components/Header";
import Content from "../components/Content";

const NotFound = ({ pageTitle, pageContent }) => (
    <>
        <Header title={pageTitle} />
        <main>
            <Section>
                <Content title={pageContent} />
            </Section>
        </main>
    </>
);

export default NotFound;
