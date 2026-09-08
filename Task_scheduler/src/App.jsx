import { useState, useEffect, useRef } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TerminalLog from "./components/TerminalLog";

const STORAGE_KEY = "scheduler_tasks";

function App() {

  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Could not read saved tasks:", err);

      return [];
    }
  });
  const [logs, setLogs] = useState([]);

  const intervalsRef = useRef({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON, stringify(tasks));
  }, [tasks]);


  const convertToMilliSeconds = (value, unit) => {

    const conversions = {
      seconds: 1000,
      minutes: 60 * 1000,
      hours: 60 * 60 * 1000,
      days: 24 * 60 * 60 * 1000,
      weeks: 7 * 24 * 60 * 60 * 1000

    };

    return value * conversions[unit];
  };

  const playBeep = () => {

    try {
      const ctx = new (window.AudioContext || window.webkitAudioContent)();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value= 880;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      oscillator.connect(gain);
      gain.connect

    }

  }

  const addTask = (taskName, intervalTime, intervalUnit) => {

    const delay = convertToMilliSeconds(
      intervalTime,
      intervalUnit
    );
    const newTask = {
      id: Date.now(),
      name: taskName,
      delay: intervalTime,
      unit: intervalUnit,
      delay: delay,
      status: "active"
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);

    setLogs((currentLogs) => [
      ...currentLogs,
      {
        timestamp: new Date().toLocaleTimeString(),
        sender: "SYSTEM",
        type: "sucess",
        message: `Task "${taskName}" registered every ${intervalTime} ${intervalUnit}.`
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
      sender: "SYSTEM", type: "warning",
      message: `Task "${name}" is now ${newStatus}.`
    }]);
  };

  const clearLogs = () => {

    setLogs([]);

  };
  return (
    <div>
      <h1>Task Scheduler</h1>

      <TaskForm onAddTaskk={addTask} />
      <TaskList tasks={tasks}
        onToggleStatus={toggleStatus} />
      <TerminalLog logs={logs}
        onClear={clearLogs} />
    </div>
  );
}

export default App;