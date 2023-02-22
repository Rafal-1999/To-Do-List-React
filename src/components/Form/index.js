import { useState } from "react";
import { useFocusElement } from "../../hooks/useFocusElement";
import "./style.css";

const Form = ({ addNewTask, existTask }) => {
    const [taskContent, setTaskContent] = useState("");

    const [inputFocus, inputFocusEvent] = useFocusElement();

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
            <button className="list__button" onClick={inputFocusEvent}>
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;
