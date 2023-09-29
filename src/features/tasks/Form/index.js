import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useFocusElement } from "../../../hooks/useFocusElement";
import { addTask } from "../tasksSlice";
import { FormArea, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask, existTask }) => {
    const [taskContent, setTaskContent] = useState("");

    const [inputFocus, inputFocusEvent] = useFocusElement();

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const trimedTaskContent = taskContent.trim();
        if (isTaskEmpty(trimedTaskContent) && !existTask(trimedTaskContent)) {
            dispatch(addTask({
                id: nanoid(),
                content: trimedTaskContent,
                done: false
            }));
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
