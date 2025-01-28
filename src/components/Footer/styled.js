import styled, { css } from "styled-components";

export const FooterArea = styled.footer`
    margin-bottom: 10px;
    padding: 25px;
    background: ${({ theme }) => theme.footer.background};
    border: 2px solid ${({ theme }) => theme.footer.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    @media (min-width: 577px) {
        flex-direction: row;
        gap: 0;
    }
`;

export const FooterBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ alignment }) => alignment && css`
        @media (min-width: 577px) {
            justify-content: flex-start;
            align-items: flex-end;
        }
    `}
`;

export const FooterContent = styled.p`
    color: ${({ theme }) => theme.footer.color};
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.19;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Awarded = styled.span`
    font-weight: 700;
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.footer.color};
    background: linear-gradient(
        to right, 
        ${({ theme }) => theme.footer.color}, 
        ${({ theme }) => theme.footer.color}
    );
    background-size: 0% 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.19;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
    word-break: break-all;

    &:hover {
        background-size: 100% 1px;
    }

    ${({ marginTop }) => marginTop && css`
        @media (hover: none) {
            margin-top: 20px;
        }
    `}
`;

export const FooterIcon = styled.i`
    font-size: 24px;
    line-height: 1;
`;
