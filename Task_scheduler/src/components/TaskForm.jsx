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
    };
    return(
        <form onSubmit={handleSubmit}
        className="space-y-4 mb-8">
            <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Worker Identity
                </label>
                <input type="text"
                placeholder="ex. DataBase Backup,API Pull"
                 value={taskName}
                 onChange={(e)=> setTaskname(e.target.value)}
                  />
            </div>
        </form>
    )

}