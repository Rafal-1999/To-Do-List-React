import { Box, Button } from "./styled";

const Buttons = ({
    tasks,
    hideDoneTasks,
    hideAllDoneTasks,
    completeAllTasks
}) => (
    tasks.length > 0 && (
        <Box>
            <Button onClick={hideAllDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={completeAllTasks}
            >
                Ukończ wszystkie
            </Button>
        </Box>
    )
);

export default Buttons;
