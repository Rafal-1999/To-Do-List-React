import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 0;
    padding-left: 0;
    background: ${({ theme }) => theme.navigation.background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    transition: all ${({ theme }) => theme.transitionDuration} linear;
`;

export const NavigationItem = styled.li`
    color: #FFF;
`;

export const NavigationLink = styled(NavLink)`
    color: ${({ theme }) => theme.navigation.color};
    padding: 20px 10px;
    display: inline-block;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitionDuration} linear;

    &:hover {
        text-decoration: underline;
    }

    &.${({ $activeClassName }) => $activeClassName} {
        font-weight: 700;
    }
`;
