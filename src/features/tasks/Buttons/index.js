import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, completeAllTasks } from "../tasksSlice";
import { Box, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <Box>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(completeAllTasks())}
                >
                    Ukończ wszystkie
                </Button>
            </Box>
        )
    )
};

export default Buttons;
