import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledNavigation = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 0;
    padding-left: 0;
    background: rgb(0, 116, 131);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`;

export const NavigationItem = styled.li`
    color: #FFF;
`;

export const NavigationLink = styled(NavLink)`
    color: #FFF;
    padding: 20px 10px;
    display: inline-block;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &.${({ $activeClassName }) => $activeClassName} {
        font-weight: 700;
    }
`;
