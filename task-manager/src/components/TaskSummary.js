import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskSummary = () => {
  const { state } = useContext(TaskContext);
  const total = state.tasks.length;
  const completed = state.tasks.filter(t => t.completed).length;

  return (
    <div>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};

export default TaskSummary;