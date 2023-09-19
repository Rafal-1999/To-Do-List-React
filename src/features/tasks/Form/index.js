import { useState } from "react";
import { useFocusElement } from "../../hooks/useFocusElement";
import { FormArea, FormInput, FormButton } from "./styled";

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
        <FormArea onSubmit={onFormSubmit}>
            <FormInput
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus
                value={taskContent}
                onChange={({ target }) => setTaskContent(target.value)}
                ref={inputFocus}
            />
            <FormButton onClick={inputFocusEvent}>
                Dodaj zadanie
            </FormButton>
        </FormArea>
    )
};

export default Form;
