import {
    HashRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Container } from "./globalStyles";
import routes from "./routes";

const App = () => {
    const pagesRoutes = routes.map(({ path, element, title }) => {
        return <Route key={title} path={path} element={element} />;
    });

    return (
        <HashRouter>
            <Navigation />
            <Container>
                <Routes>
                    {pagesRoutes}
                    <Route path="/" element={<Navigate to="/zadania" />} />
                </Routes>
                <Footer
                    creator="Rafał Chudy"
                    copyright="wszelkie prawa zastrzeżone"
                    year="2022 - 2024"
                    socialLink="https://github.com/Rafal-1999"
                    socialName="GitHub"
                    socialIcon="icon-github"
                    email="rafalchu5@gmail.com"
                />
            </Container>
        </HashRouter>
    )
};

export default App;
