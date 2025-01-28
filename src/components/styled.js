import styled, { css } from "styled-components";

export const Box = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.unfilledButton.color};
    background: none;
    padding: 0;
    border: none;
    font-size: 18px;
    transition: color ${({ theme }) => theme.transitionDuration} linear;
    cursor: pointer;

    ${({ cursorDefault }) => cursorDefault && css`
        cursor: default;
    `}

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.unfilledButton.hoverColor};
    }

    &:disabled {
        color: ${({ theme }) => theme.unfilledButton.disabledColor};
    }

    @media (max-width: 768px) {
        margin: 0;
    }
`;
