import styled from "styled-components";

export const SearchEngine = styled.input`
    width: 100%;
    padding: 10px;
    color: ${({ theme }) => theme.formInput.color};
    background: ${({ theme }) => theme.formInput.background};
    border: 2px solid ${({ theme }) => theme.formInput.border};
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;
