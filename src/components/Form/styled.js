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
    flex: 1;

    @media (max-width: 576px) {
        margin: 0 0 15px;
    }
`;

export const FormButton = styled.button`
    padding: 10px;
    color: rgb(255, 255, 255);
    background: rgb(0, 116, 131);
    border: 3px solid rgb(30, 111, 125);
    transition: all 0.5s linear;
    cursor: pointer;

    &:hover,
    &:focus {
        background: rgb(0, 141, 156);
        border-color: rgb(30, 136, 150);
        transform: scale(1.1);
    }

    &:active {
        background: rgb(0, 167, 182);
    }
`;
