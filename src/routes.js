import Tasks from "./pages/Tasks";
import Task from "./pages/Task";
import Author from "./pages/Author";
import NotFound from "./pages/NotFound";

const routes = [
    {
        name: "Zadania",
        path: "/zadania",
        element: <Tasks />,
        title: "zadania"
    },
    {
        name: "Zadanie",
        path: "/zadania/:id",
        element: <Task />,
        title: "zadanie"
    },
    {
        name: "O autorze",
        path: "/autor",
        element: <Author />,
        title: "autor"
    },
    {
        name: "Nie znaleziono",
        path: "*",
        element: <NotFound
            pageTitle="Nie znaleziono strony"
            pageContent="Nie udało się odnaleźć strony, której szukasz. 
            Proszę sprawdzić adres URL i spróbować ponownie lub skorzystać z menu nawigacyjnego."
        />,
        title: "nie znaleziono"
    }
];

export default routes;
