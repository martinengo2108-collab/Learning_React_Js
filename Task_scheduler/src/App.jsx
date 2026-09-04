import React, { useState, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TerminalLog from './components/TerminalLog';

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [Logs, setLogs] = useState([]);

    const addLog = (sender, message, type = 'info') => {

        const timeStamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, { sender, message, type, timeStamp }]);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));

        const activeIntervals = [];

        tasks.forEach((task) => {
            if (task.status === "active") {
                const timerId = setInterval(() => {
                    addLog(task.name.toUppercase(), `Worker loop triggered every ${task.delay}s`, "task")
                }, task.delay * 1000);
                activeIntervals.push(timerId);
            }
        });
        return () => {
            activeIntervals.forEach((id) => clearInterval(id));
        };


    }, [tasks]);

    const handleAddTask = (name, delay) => {
        const newtask = {
            id: Date.now(),
            name, delay,
            status: "active"
        };

        setTasks([...tasks, newtask]);
        addLog("SYSTEM", `Task : "${name}" `, "success");

    };

    const toogleTaskStatus =(id,name,currentStatus) => {
        const nextStatus = currentStatus === "active" ? "paused" : "active";
        setTasks(tasks.map(task => task.id === id ? { ...task, status: nextStatus } : task));

        if(nextStatus === "paused") {
            addLog("SYSTEM", `Task : "${name}" is now paused`, "warning");
        } else {
            addLog("SYSTEM", `Task : "${name}" is now active`, "success");
        }
    };

    const clearLogs =() => setLogs([]);
    return (
        <div className="min-h-screen
        bg-slate-100
        text-slate-100 font sans p-6 flex flex-col items-center justify-center">
          <div  className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col justify-between
            min-h-[500px]">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Task Manager DashBoard</h2>

                    <p className="text-slate-400 text-sm mb-6">
                        Manage concurrent tasks,pause threads, and track execution logs asynchronously

                    </p>
                    <TaskForm onAddTask={handleAddTask} />
                </div>
                <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus}/>
            </div>

        

          </div>

        </div>
    )
    
};