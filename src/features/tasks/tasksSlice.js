import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleDoneTask: ({ tasks }, { payload }) => {
            const taskIndex = tasks.findIndex(task => task.id === payload);
            tasks[taskIndex].done = !tasks[taskIndex].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const taskIndex = tasks.findIndex(task => task.id === payload);
            tasks.splice(taskIndex, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        completeAllTasks: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    }
});

export const {
    addTask,
    toggleDoneTask,
    removeTask,
    toggleHideDone,
    completeAllTasks,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
}
export default tasksSlice.reducer;
