import styled, { createGlobalStyle } from "styled-components";

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
        background: ${({ theme }) => theme.body.background};
        font-family: "Montserrat", sans-serif;
        transition: background ${({ theme }) => theme.transitionDuration} linear;
    }
`;

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 10px;

    @media (min-width: 576px) {
        padding: 0 25px;
    }
`;
