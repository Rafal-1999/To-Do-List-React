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
    border-bottom: 2px solid rgb(227, 227, 227);

    &:hover,
    &:focus-within {
        background: rgb(227, 227, 227);
    }

    &:last-child {
        border: 0;
    }

    ${({ done }) => done && css`
        display: none;
    `}
`;

export const ButtonIcon = styled.i`
    color: rgb(255, 255, 255);
    font-size: 20px;
`;

export const ActionButton = styled.button`
    width: 40px;
    height: 40px;
    border: 0;
    flex-shrink: 0;
    transition: background 0.5s linear;
    cursor: pointer;

    ${({ done }) => done && css`
        background: rgb(24, 122, 30);

        &:hover,
        &:focus {
            background: rgb(30, 137, 35);
        }

        &:active {
            background: rgb(35, 165, 40);
        }
    `}

    ${({ remove }) => remove && css`
        background: rgb(218, 22, 41);

        &:hover,
        &:focus {
            background: rgb(250, 60, 72);
        }

        &:active {
            background: rgb(255, 85, 91);
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
    background: linear-gradient(0deg, #000, #000);
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
    color: rgb(0, 116, 131);
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
        color: rgb(0, 160, 200);
        text-decoration: underline;
    }
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
    margin-top: -15px !important;
    padding: 10px 20px !important;
`;

export const TasksInfo = styled.p`
    margin: 0;
`;
