import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [hideDoneTasks, setHideDoneTasks] = useState(false);

    const addNewTask = (taskContent) => {
        setTasks(tasks => [
            ...tasks, {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content: taskContent,
                done: false
            }
        ])
    };

    const existTask = (taskContent) => {
        if (tasks.some(({ content }) => content === taskContent)) {
            alert("Podane zadanie jest już na liście.");
            return true;
        }
    };

    const hideAllDoneTasks = () => {
        setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    };

    const completeAllTasks = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true
        })))
    };

    const toggleDoneTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            }
            return task;
        }))
    };

    const smoothCrossOutTask = (task) => {
        const lengthTaskContent = task.content.length;
        const result = `${((lengthTaskContent / 10) * 0.1).toFixed(1)}s`;
        return result;
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(
            task => task.id !== id
        ))
    };

    return {
        tasks,
        hideDoneTasks,
        addNewTask,
        existTask,
        hideAllDoneTasks,
        completeAllTasks,
        toggleDoneTask,
        smoothCrossOutTask,
        removeTask
    }
};
