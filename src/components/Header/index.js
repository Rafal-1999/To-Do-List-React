import "./style.css";

const Header = ({ title }) => (
    <header>
        <h1 className="list__title">
            {title}
        </h1>
    </header>
);

export default Header;
