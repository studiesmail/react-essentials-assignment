import TaskProvider from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
        <TaskSummary />
      </div>
    </TaskProvider>
  );
}

export default App;