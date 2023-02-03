import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask, existTask }) => {
    const [taskContent, setTaskContent] = useState("");

    const inputFocus = useRef();
    const focus = () => {
        inputFocus.current.focus();
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const trimedTaskContent = taskContent.trim();
        if (isTaskEmpty(trimedTaskContent) && !existTask(trimedTaskContent)) {
            addNewTask(trimedTaskContent);
            setTaskContent("");
        }
    };

    const isTaskEmpty = (taskContent) => taskContent.length !== 0;

    return (
        <form className="list__form" onSubmit={onFormSubmit}>
            <input
                type="text"
                className="list__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                value={taskContent}
                onChange={({ target }) => setTaskContent(target.value)}
                ref={inputFocus}
            />
            <button className="list__button" onClick={focus}>
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;
