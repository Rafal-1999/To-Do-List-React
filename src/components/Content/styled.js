import styled, { css } from "styled-components";

export const Block = styled.div`
    background: ${({ theme }) => theme.contentBlock.background};
    margin-bottom: 10px;
    border: 2px solid ${({ theme }) => theme.contentBlock.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;

export const TopBox = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    row-gap: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.contentBlock.border};
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    ${({ vertical }) => vertical && css`
        @media (max-width: 768px) {
            flex-direction: column;
        }
    `}
`;

export const HeaderTwo = styled.h2`
    color: ${({ theme }) => theme.h2.color};
    margin: 0;
    font-size: 20px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-word;

    @media (min-width: 576px) {
        font-size: 25px;
    }
`;

export const BottomBox = styled.div`
    padding: 25px;
`;
