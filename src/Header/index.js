import "./style.css";

const Header = (props) => (
    <header>
        <h1 className="list__title">
            {props.title}
        </h1>
    </header>
);

export default Header;
