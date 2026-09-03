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
};