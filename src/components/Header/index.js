import { HeaderOne } from "./styled";

const Header = ({ title }) => (
    <header>
        <HeaderOne>
            {title}
        </HeaderOne>
    </header>
);

export default Header;
