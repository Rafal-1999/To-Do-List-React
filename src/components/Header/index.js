import { StyledHeader, HeaderOne } from "./styled";

const Header = ({ title, extraElement }) => (
    <StyledHeader>
        <HeaderOne>
            {title}
        </HeaderOne>
        {extraElement}
    </StyledHeader>
);

export default Header;
