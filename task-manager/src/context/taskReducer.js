export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",
  CLEAR_TASKS: "CLEAR_TASKS"
};

export const initialState = {
  tasks: []
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case ACTIONS.TOGGLE_TASK:
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case ACTIONS.EDIT_TASK:
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, name: action.payload.name } : task
        )
      };
    case ACTIONS.DELETE_TASK:
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    case ACTIONS.CLEAR_TASKS:
      return { tasks: [] };
    default:
      return state;
  }
};

export default taskReducer;