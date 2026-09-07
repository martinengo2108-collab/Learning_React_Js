import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TerminalLog from "./components/TerminalLog";

function App() {

  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([])

  const addTask = (taskName, intervalTime) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      delay: intervalTime,
      status: "active"
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);

    setLogs((currentLogs) => [
      ...currentLogs,
      {
        timestamp: new Date().toLocaleTimeString(),
        sender: "SYSTEM",
        type: "sucess",
        message: `Task"${taskName}" registered sucessfully.`
      }
    ]);
  };

  const toggleStatus = (id, name, status) => {
    const newStatus = status === "active" ? "paused" : "active";

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus }
          : task)
    );
    setLogs((currentLogs) => [...currentLogs, {
      timestamp: new Date().toLocaleTimeString(),
      sender: "SYSTEM",
      message: `Task "${name}" is now ${newStatus}.`
    }]);
  };
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