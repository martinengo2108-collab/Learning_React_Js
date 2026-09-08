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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
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
      oscillator.frequency.value = 880;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.35);

    } catch (err) {
      console.error("Could not play alarm sound:", err)
    }

  };

  const runTask = (id, name) => {
    playBeep();

    setLogs((currentLogs) => [
      ...currentLogs, {
        timestamp: newDate().toLocaleTimeString(),
        sender: "SCHEDULER",
        type: "task",

        message: `Task "${name}" executed sucessfully.`
      }
    ]);
  };

  useEffect(() => {
    Object.values(intervalsRef.current).forEach(clearInterval);

    intervalsRef.current = {};

    tasks.forEach((task) => {
      if (task.status === "active") {
        intervalsRef.current[tasks.id] = setInterval(() => {
          runTask(task.id, task.name);
        }, task.delaysMs);
      }
    });
    return () => {

      Object.values(intervalsRef.current).forEach(clearInterval);
    };
  }, [tasks]);

  const addTask = (taskName, intervalTime, intervalUnit) => {

    const delayMs = convertToMilliSeconds(
      intervalTime,
      intervalUnit
    );
    const newTask = {
      id: Date.now(),
      name: taskName,
      interval: intervalTime,
      unit: intervalUnit,
      delayMs,
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
  const deleteTask = (id, name) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));

    setLogs((currentLogs) => [
      ...currentLogs, {
        timestamp: new Date().toLocaleTimeString(),
        sender: "SYSTEM",
        type: "warning",
        message: `Task"${name}" deleted.`
      }
    ])
  }

  const clearLogs = () => {

    setLogs([]);

  };
  return (


    <div className="min-h-screen bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-8 border-b-4 border-blue-600 pb-4">
          <h1 className="text-sm text-slate-500 mt-1">Task Scheduler</h1>
          <p className="text-sm text-slate-500 mt-1">
            Register recurring jobs and watch tem run.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <TaskForm onAddTask={addTask} />
            <TaskList
              tasks={tasks}
              onToggleStatus={toggleStatus}
              onDeletetask={deleteTask} />

          </div>
          <TerminalLog logs={logs} onClear={clearLogs} />
        </div>
      </div>
    </div>


  );
}

export default App;