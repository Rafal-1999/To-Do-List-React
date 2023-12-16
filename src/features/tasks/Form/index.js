import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useFocusElement } from "../../../hooks/useFocusElement";
import { selectTasks, addTask } from "../tasksSlice";
import { FormArea, FormInput, FormButton } from "./styled";

const Form = () => {
    const [taskContent, setTaskContent] = useState("");

    const [inputFocus, inputFocusEvent] = useFocusElement();

    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    const isTaskEmpty = (taskContent) => taskContent.length === 0;

    const existsTask = (taskContent) => {
        if (tasks.some(({ content }) => content === taskContent)) {
            alert("Podane zadanie jest już na liście.");
            return true;
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const trimedTaskContent = taskContent.trim();
        if (!isTaskEmpty(trimedTaskContent) && !existsTask(trimedTaskContent)) {
            dispatch(addTask({
                id: nanoid(),
                content: trimedTaskContent,
                done: false
            }));
            setTaskContent("");
        }
    };

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
