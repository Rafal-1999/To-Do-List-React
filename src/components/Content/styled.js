import styled, { css } from "styled-components";

export const Block = styled.div`
    background: rgb(255, 255, 255);
    margin-bottom: 10px;
    border: 2px solid rgb(227, 227, 227);
    border-radius: 10px;
`;

export const TopBox = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    row-gap: 20px;
    border-bottom: 2px solid rgb(227, 227, 227);

    ${({ direction }) => direction && css`
        column-gap: 15px;

        @media (max-width: 320px) {
            flex-direction: column-reverse;
        }
    `}

    @media (max-width: 768px) {
        ${({ vertical }) => vertical && css`
            flex-direction: column;
        `}
    }
`;

export const HeaderTwo = styled.h2`
    margin: 0;
    font-size: 25px;

    @media (max-width: 576px) {
        font-size: 20px;
    }
`;

export const BottomBox = styled.div`
    padding: 25px;
`;
