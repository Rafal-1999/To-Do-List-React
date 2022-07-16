import "./style.css";

const Form = () => (
    <form className="list__form">
        <input type="text" className="list__input" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="list__button">
            Dodaj zadanie
        </button>
    </form>
);

export default Form;
