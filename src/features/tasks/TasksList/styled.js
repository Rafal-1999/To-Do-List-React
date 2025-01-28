import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styled, { css } from "styled-components";

export const TasksArea = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const TasksItem = styled.li`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 2px solid ${({ theme }) => theme.tasks.border};
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:hover,
    &:focus-within {
        background: ${({ theme }) => theme.tasks.background1};
    }

    &:last-child {
        border: 0;
    }

    ${({ done }) => done && css`
        display: none;
    `}
`;

export const ButtonIcon = styled.i`
    color: ${({ theme }) => theme.actionButtonIcon.color};
    font-size: 20px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;

export const ActionButton = styled.button`
    width: 40px;
    height: 40px;
    border: 0;
    flex-shrink: 0;
    transition: background ${({ theme }) => theme.transitionDuration} linear;
    cursor: pointer;

    ${({ done }) => done && css`
        background: ${({ theme }) => theme.actionButton1.background};

        &:hover,
        &:focus {
            background: ${({ theme }) => theme.actionButton1.hoverBackground};
        }

        &:active {
            background: ${({ theme }) => theme.actionButton1.activeBackground};
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.actionButton2.background};

        &:hover,
        &:focus {
            background: ${({ theme }) => theme.actionButton2.hoverBackground};
        }

        &:active {
            background: ${({ theme }) => theme.actionButton2.activeBackground};
        }
    `}
`;

export const TasksParagraph = styled.p`
    margin: 0 0 15px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 100%;
    order: -1;

    @media (min-width: 320px) {
        margin: 0 15px;
        flex-basis: 100px;
        order: 0;
    }
`;

export const TasksContent = styled.span`
    background: linear-gradient(
        to right, 
        ${({ theme }) => theme.tasks.background2}, 
        ${({ theme }) => theme.tasks.background2}
    );
    background-size: 0% 1px;
    background-position: left center;
    background-repeat: no-repeat;
    transition-property: background-size;
    transition-duration: ${({ transitionTime }) => transitionTime >= "0.1" ? transitionTime : "0.1s"};
    transition-timing-function: linear;
    word-break: break-word;

    ${({ done }) => done && css`
        background-size: 100% 1px;
    `}
`;

export const TasksLink = styled(Link)`
    color: ${({ theme }) => theme.tasks.color};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitionDuration} linear;

    &:hover {
        color: ${({ theme }) => theme.tasks.hoverColor};
        text-decoration: underline;
    }
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
    margin-top: -15px !important;
    padding: 10px 20px !important;
`;

export const TasksInfo = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.body.color};
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;
