export const useTasks = () => {
    const smoothCrossOutTask = (task) => {
        const lengthTaskContent = task.content.length;
        const result = `${((lengthTaskContent / 10) * 0.1).toFixed(1)}s`;
        return result;
    };

    return {
        smoothCrossOutTask
    }
};
