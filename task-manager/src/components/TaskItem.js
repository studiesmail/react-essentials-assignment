import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../context/taskReducer";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input value={editName} onChange={e => setEditName(e.target.value)} />
      ) : (
        <span>{task.name}</span>
      )}

      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: task.id })}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      {isEditing ? (
        <button onClick={() => {
          dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: task.id, name: editName } });
          setIsEditing(false);
        }}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id })}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;