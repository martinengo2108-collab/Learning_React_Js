import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TerminalLog from "./components/TerminalLog";

function App() {
  return (
    <div>
      <h1>Task Scheduler</h1>

      <TaskForm />
      <TaskList />
      <TerminalLog />
    </div>
  );
}

export default App;