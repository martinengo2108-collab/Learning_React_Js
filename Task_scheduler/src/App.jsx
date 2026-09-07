import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TerminalLog from "./components/TerminalLog";

function App() {

  const [tasks,setTasks] = useState([]);
  const [logs,setLogs] =useState([])

  const addTask =(taskName,intervalTime)=>{
    const newTask ={
      id:Date.now(),
      name: taskName,
      delay:intervalTime,
      status:"active"
    };

    setTasks((currentTasks) =>[...currentTasks,newTask]);

    setLogs((currentLogs) =>[
      ...currenttLogs,{
        
      }
    ])
  }
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