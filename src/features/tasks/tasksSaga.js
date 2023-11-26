import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksToLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksToLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksToLocalStorageHandler);
}
