import React,{ useState, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TerminalLog from './components/TerminalLog';

export default function App() { 
    const [tasks, setTasks] = useState(() =>{
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const[Logs, setLogs] = useState([]);

    const addLog =(sender,message,type ='info') =>{

        const timeStamp = new Date().toLocaleTimeString();
    }
   
};