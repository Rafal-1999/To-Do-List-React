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

export const HeaderThree = styled.h3`
    margin: 15px 0;
    color: ${({ theme }) => theme.h3.color};
    font-size: 18px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-word;

    @media (min-width: 576px) {
        margin: 25px 0;
        font-size: 20px;
    }
`;

export const Text = styled.p`
    margin: 0 0 15px;
    color: ${({ theme }) => theme.body.color};
    font-size: 16px;
    font-weight: 400;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-word;

    @media (min-width: 576px) {
        margin-bottom: 25px;
    }
`;

export const UnorderedList = styled.ul`
    margin: 0 0 15px;
    padding-left: 0;
    list-style: none;
`;

export const UnorderedItem = styled.li`
    padding-left: 15px;
    color: ${({ theme }) => theme.unorderedList.color};
    font-size: 16px;
    font-weight: 400;
    position: relative;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-word;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        background: ${({ theme }) => theme.unorderedList.background};
        position: absolute;
        top: 6px;
        left: 0;
        transition: all ${({ theme }) => theme.transitionDuration} linear;
    }

    @media (min-width: 576px) {
        padding-left: 25px;
    }
`;
