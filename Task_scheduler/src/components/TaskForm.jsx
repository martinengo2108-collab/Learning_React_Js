import React ,{useState} from "react"

export default function TaskForm({onAddTaskk}){
    const [taskName,setTaskname] = useState("");

    const [intervalTime,setIntervalTime] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();

        if (!taskName.trim() || !intervalTime) return;

        onAddTaskk(taskName,parseInt(intervalTime,10));

        setTaskname;
        setIntervalTime;
    }

}