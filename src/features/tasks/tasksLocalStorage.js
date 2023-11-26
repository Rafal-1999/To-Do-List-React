const localStorageKey = "tasks";

export const saveTasksToLocalStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];
