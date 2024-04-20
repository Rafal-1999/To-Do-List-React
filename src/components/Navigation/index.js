import { StyledNavigation, NavigationItem, NavigationLink } from "./styled";

const Navigation = () => (
    <nav>
        <StyledNavigation>
            <NavigationItem>
                <NavigationLink $activeClassName="active" to="/zadania" >
                    Zadania
                </NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink $activeClassName="active" to="/autor"  >
                    O autorze
                </NavigationLink>
            </NavigationItem>
        </StyledNavigation>
    </nav>
);

export default Navigation;
