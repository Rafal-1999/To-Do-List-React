import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
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
        }
    }
});

export const {
    addTask,
    toggleDoneTask,
    removeTask,
    toggleHideDone,
    completeAllTasks
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
