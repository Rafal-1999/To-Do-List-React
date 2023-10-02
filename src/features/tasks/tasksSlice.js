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
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        }
    }
});

export const { addTask, toggleDoneTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
