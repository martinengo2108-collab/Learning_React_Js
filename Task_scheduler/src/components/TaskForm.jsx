import React ,{useState} from "react"

export default function TaskForm({onAddTaskk}){
    const [taskName,setTaskname] = useState("");

    const [intervalTime,setIntervalTime] = useState("");
    const [intervalUnit,setIntervalUnit]= useState("seconds")

    const handleSubmit =(e) =>{
        e.preventDefault();

        if (!taskName.trim() || !intervalTime) return;

        onAddTaskk(taskName,parseInt(intervalTime,10),
    intervalUnit);

        setTaskname("");
        setIntervalTime(" ");
        setIntervalUnit("seconds");
    };
    return(
        <form onSubmit={handleSubmit}
        className="space-y-4 mb-8">
            <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Task Name
                </label>
                <input type="text"
                placeholder="ex. DataBase Backup,API Pull"
                 value={taskName}
                 onChange={(e)=> setTaskname(e.target.value)}

                 className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                 required
                  />

                  <select value={intervalUnit}
                  onChange={(e)=> setIntervalUnit(e.target.value)}
                   className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition">
                    <option value="seconds">Seconds</option>
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                    <option value="weeks">weeks</option>
                   </select>
            </div>
            
            <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg shadow-blue-600/20 transition duration-200">
                Register task
            </button>
        </form>
    )

}