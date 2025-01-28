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
    border: 0;
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

export const HiddenFormLabel = styled.label`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;
