import styled from "styled-components";

export const HiddenFormLabel = styled.label`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;

export const SearchEngine = styled.input`
    width: 100%;
    padding: 10px;
`;
