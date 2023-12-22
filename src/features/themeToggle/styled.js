import styled, { css } from "styled-components";

export const StyledThemeToggle = styled.button`
    width: 60px;
    height: 30px;
    background: rgb(218, 22, 41);
    display: block;
    border: 0;
    border-radius: 50px;
    box-shadow: rgba(20, 20, 20, 0.75) 0px 2px 5px 1px inset,
    rgba(20, 20, 20, 0.75) 0px -2px 5px 1px inset;
    flex-shrink: 0;
    position: relative;
    transition: all 0.3s linear;
    z-index: 1;
    cursor: pointer;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        margin: auto 0;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 5px;
        bottom: 0;
        transition: all 0.3s linear;
    }

    &::after {
        content: "\\e803";
        width: 50%;
        height: 100%;
        color: rgb(255, 255, 255);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: fontello;
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.3s linear;
    }

    ${({ currentTheme }) => currentTheme === "dark" && css`
        background: rgb(33, 166, 42);

        &::before {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }

        &::after {
            content: "\\e801";
            color: rgb(0, 0, 0);
            right: 50%;
        }
    `}

    @media (max-width: 320px) {
        margin-left: auto;
    }
`;
