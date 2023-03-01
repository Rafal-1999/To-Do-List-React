import { createGlobalStyle, css } from "styled-components";

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
        background: rgb(238, 238, 238);
        font-family: "Montserrat", sans-serif;

        ${({ darkTheme }) => darkTheme && css`
            color: rgb(255, 255, 255);
            background: rgb(17, 17, 17);
        `}

        @media (max-width: 576px) {
            padding: 0 10px;
        }
    }
`;
