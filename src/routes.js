import { lazy } from "react";

const Tasks = lazy(() => import("./pages/Tasks"));
const Task = lazy(() => import("./pages/Task"));
const Author = lazy(() => import("./pages/Author"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
