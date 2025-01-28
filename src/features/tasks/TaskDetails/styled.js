import styled from "styled-components";

export const TaskDetail = styled.p`
    margin-top: 0;
    color: ${({ theme }) => theme.body.color};
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:last-child {
        margin-bottom: 0;
    }
`;
