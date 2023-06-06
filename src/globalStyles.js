import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
    }

    i[class*="icon-"]::before {
        margin: 0;
    }

    html {
        box-sizing: inherit;
    }

    body {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 25px;
        font-family: "Montserrat", sans-serif;

        @media (max-width: 576px) {
            padding: 0 10px;
        }
    }
`;
