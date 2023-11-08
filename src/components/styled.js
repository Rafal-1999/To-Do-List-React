import styled, { css } from "styled-components";

export const Button = styled.button`
    color: rgb(0, 116, 131);
    background: none;
    padding: 0;
    border: none;
    font-size: 18px;
    transition: color 0.3s linear;
    cursor: pointer;

    ${({ cursorDefault }) => cursorDefault && css`
        cursor: default;
    `}

    &:hover,
    &:focus {
        color: rgb(0, 160, 200);
    }

    &:disabled {
        color: rgb(200, 200, 200);
    }

    @media (max-width: 768px) {
        margin: 0;
    }
`;
