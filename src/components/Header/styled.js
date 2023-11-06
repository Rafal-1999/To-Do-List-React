import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: flex-end;
    gap: 20px 15px;
`;

export const HeaderOne = styled.h1`
    margin-top: 0;
    font-size: 40px;

    @media (max-width: 576px) {
        font-size: 30px;
    }
`;
