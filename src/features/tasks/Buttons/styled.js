import styled from "styled-components";

export const Box = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 20px 0;
    }
`;

export const Button = styled.button`
    color: rgb(0, 116, 131);
    background: none;
    margin: 0 10px;
    padding: 0;
    border: none;
    font-size: 18px;
    transition: color 0.3s linear;
    cursor: pointer;

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
