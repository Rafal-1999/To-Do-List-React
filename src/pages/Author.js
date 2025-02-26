import Header from "../components/Header";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import Section from "../components/Section";
import Content from "../components/Content";
import {
    Text,
    HeaderThree,
    UnorderedList,
    UnorderedItem
} from "../globalStyles";

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
                        <>
                            <Text>
                                Jestem pasjonatem technologii i programowania. Pierwsze linie kodu zacząłem pisać w gimnazjum.
                                I tak pasja trwa do dziś. Na co dzień zajmuję się tworzeniem oraz rozwojem stron internetowych, aplikacji webowych oraz mobilnych, a moim celem jest tworzenie rozwiązań, które są zarówno funkcjonalne, jak i przyjazne użytkownikowi.<br />
                                Specjalizuję się w JavaScript oraz React, a moim codziennym celem jest nieustanne doskonalenie swoich umiejętności oraz dostosowywanie się do najnowszych trendów w branży. Stawiam na praktyczne podejście do nauki regularnie poszukując konkretnych rozwiązań.<br />
                                Poza programowaniem interesuję się nowoczesną technologią i grami komputerowymi (głównie logicznymi), co pozwala mi spojrzeć na tworzenie funkcjonalności z różnych perspektyw.
                                To repozytorium jest wynikiem mojej pasji. Zależy mi, aby ta aplikacja była przykładem moich osiągnięć i zdobytych umiejętności.<br />
                                Dziękuję za odwiedzenie mojego projektu.
                            </Text>
                            <HeaderThree>Zainteresowania</HeaderThree>
                            <UnorderedList>
                                <UnorderedItem>Nowe technologie</UnorderedItem>
                                <UnorderedItem>Książki (obyczajowe, kryminalne)</UnorderedItem>
                                <UnorderedItem>Gry komputerowe (logiczne, przygodowe)</UnorderedItem>
                                <UnorderedItem>Muzyka</UnorderedItem>
                                <UnorderedItem>Sudoku</UnorderedItem>
                            </UnorderedList>
                        </>
                    }
                />
            </Section>
        </main>
    </>
);

export default Author;
