import styled, { css } from "styled-components";

export const Box = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
