import styled, { css } from "styled-components";

export const FooterArea = styled.footer`
    margin-bottom: 10px;
    padding: 25px;
    background: rgb(255, 255, 255);
    border: 2px solid rgb(227, 227, 227);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 577px) {
        flex-direction: row;
        gap: 0;
    }
`;

export const FooterBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 577px) {
        ${({ alignment }) => alignment && css`
            align-items: flex-end;
        `}
    }
`;

export const FooterContent = styled.p`
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.19;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Awarded = styled.span`
    font-weight: 700;
`;

export const FooterLink = styled.a`
    color: rgb(0, 0, 0);
    background: linear-gradient(to right, #000, #000);
    background-size: 0% 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.19;
    text-decoration: none;
    transition: background-size 0.3s linear;
    word-break: break-all;

    &:hover,
    &:focus {
        background-size: 100% 1px;
    }

    ${({ marginTop }) => marginTop && css`
        @media (max-width: 576px) and (hover: none) {
            margin-top: 20px;
        }
    `}
`;

export const FooterIcon = styled.i`
    font-size: 24px;
    line-height: 1;
`;
