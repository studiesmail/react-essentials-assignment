import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  return (
    <div>
      {state.tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        state.tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;