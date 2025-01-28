import styled from "styled-components";

export const FormArea = styled.form`
    display: flex;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    margin-right: 25px;
    padding: 10px;
    color: ${({ theme }) => theme.formInput.color};
    background: ${({ theme }) => theme.formInput.background};
    border: 2px solid ${({ theme }) => theme.formInput.border};
    flex: 1;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media (max-width: 576px) {
        margin: 0 0 15px;
    }
`;

export const FormButton = styled.button`
    padding: 10px;
    color: ${({ theme }) => theme.filledButton.color};
    background: ${({ theme }) => theme.filledButton.background};
    border: 3px solid ${({ theme }) => theme.filledButton.border};
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${({ theme }) => theme.filledButton.hoverBackground};
        border-color: ${({ theme }) => theme.filledButton.hoverBorder};
        transform: scale(1.1);
    }

    &:active {
        background: ${({ theme }) => theme.filledButton.activeBackground};
    }
`;
