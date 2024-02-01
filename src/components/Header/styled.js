import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap-reverse;
    gap: 20px 15px;
`;

export const HeaderOne = styled.h1`
    margin: 0;
    font-size: 40px;

    @media (max-width: 576px) {
        font-size: 28px;
    }
`;
