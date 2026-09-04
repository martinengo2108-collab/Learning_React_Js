import React from "react"

export default function TaskList({ tasks, onToggleStatus }) {
    return (
        <div>
            <h3
                className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-700 pb-2">
                Registered tasks

            </h3>
            {tasks.length === 0 ? (<p
                className="text-sm text-slate-500 italic"
            >No task mapped out in JSON local storage memory</p>) : ( 
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1" >
                    {tasks.map((task) =>(
                        <div 
                        key={task.id} className="flex justify-between items-center bg-slate-900/60 border-slate-700/40 px-4 py-3 rounded-xl">
                            <div>
                                <span 
                                className="text-xs text-slate-400 pl-4 block mt-0.5"> Execute every {tasks.delay}s</span>
                            </div>

                            <button onClick={() => onToggleStatus(task.id,task.name,task.status)}
                                className={`text-xs px-3 py-1.5 font-medium rounded-md transition border ${
                                    task.status ==="active"?
                                    "bg-amber-500/100 hover:bg-amber-500/20 text-amber-400 border-emerald-500/20":
                                    "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
                                }`}>
                                    {task.status === "active" ?"Pause ": "Resume"}
                                </button>
                        </div>
                    ))
                    }
                </div>

            )}

        </div>
    );
}