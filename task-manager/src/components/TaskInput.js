import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../context/taskReducer";

const TaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = () => {
    if (!taskName) return;
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { id: Date.now(), name: taskName, completed: false }
    });
    setTaskName("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;