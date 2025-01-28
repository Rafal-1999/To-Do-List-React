import { StyledNavigation, NavigationLink } from "./styled";

const Navigation = () => (
    <nav>
        <StyledNavigation>
            <li>
                <NavigationLink $activeClassName="active" to="/zadania">
                    Zadania
                </NavigationLink>
            </li>
            <li>
                <NavigationLink $activeClassName="active" to="/autor">
                    O autorze
                </NavigationLink>
            </li>
        </StyledNavigation>
    </nav>
);

export default Navigation;
