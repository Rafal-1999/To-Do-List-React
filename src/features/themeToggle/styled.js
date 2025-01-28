import styled, { css } from "styled-components";

export const StyledThemeToggle = styled.button`
    width: 60px;
    height: 30px;
    background: ${({ theme }) => theme.themeToggle.background1};
    display: block;
    border: 2px solid ${({ theme }) => theme.themeToggle.border};
    border-radius: 50px;
    flex-shrink: 0;
    position: relative;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    z-index: 1;
    cursor: pointer;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.themeToggle.background2};
        margin: auto 0;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 5px;
        bottom: 0;
        transition: all 0.3s linear;
    }

    &::after {
        content: "\\e804";
        width: 50%;
        height: 100%;
        color: ${({ theme }) => theme.themeToggle.color};
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
        &::before {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }

        &::after {
            content: "\\e805";
            right: 50%;
        }
    `}

    @media (max-width: 320px) {
        margin-left: auto;
    }
`;
