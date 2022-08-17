import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, isTaskEmpty, existTask }) => {
    const [taskContent, setTaskContent] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (isTaskEmpty(taskContent.trim()) && !existTask(taskContent.trim())) {
            addNewTask(taskContent.trim());
            setTaskContent("");
        }
    };

    return (
        <form className="list__form" onSubmit={onFormSubmit}>
            <input
                type="text"
                className="list__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                value={taskContent}
                onChange={({ target }) => setTaskContent(target.value)}
            />
            <button className="list__button">
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;
