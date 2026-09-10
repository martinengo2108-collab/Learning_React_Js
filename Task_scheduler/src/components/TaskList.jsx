import React from "react"

export default function TaskList({ tasks, onToggleStatus, onDeleteTask }) {

    const priorityBorder = {
        low: "border-l-[#A7F3DO]",
        medium: "border-l-[#FCA5A5]",
        high: "border-l-[#FCA5A5]"
    }

    const priorityBadge = {
        low: "bg-[#A7F3DO] text-emerald-900",
        medium: "bg-[#FDE68A] text-amber-900",
        high: "bg-[#FCA5A5] text-red-900"
    };
    return (
        <div>
            <h3
                className="text-xs font-bold text-slate-500 mb-3 border-b-2 border-slate-200 pb-2">
                Registered tasks

            </h3>
            {tasks.length === 0 ? (<p
                className="text-sm text-slate-400 italic"
            >No task yet - add one above to get started</p>) : (
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1" >
                    {tasks.map((task) => (
                        <div
                            key={task.id} className="flex justify-between items-center bg-slate-50 border-l-4 ${
                            priorityBorder[task.priority] || priorityBorder.medium}
                            border-y border-r border-slate-200 px-4 py-3 rounded-lg">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm text-slate-900 font-medium">
                                        {task.name}
                                    </p>
                                    <span
                                        className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${priorityBadge[task.priority] || priorityBadge.medium
                                            }`}>
                                        {task.priority || "medium"}

                                    </span>
                                </div>
                                <span
                                    className="text-xs text-slate-400"> Runs every {task.interval} {task.unit}
                                </span>

                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onToggleStatus(task.id, task.name, task.status)}
                                    className={`text-xs px-3 py-1.5 font-medium rounded-md transition border-2 ${task.status === "active" ? "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-300" : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-300"
                                        }`}>
                                    {task.status === "active" ? "Pause" : "Resume"}
                                </button>
                                <button
                                    onClick={() => {
                                        if (window.confirm(`Delete task "${task.name}" ?`)) {
                                            onDeleteTask(task.id, task.name);
                                        }
                                    }}
                                    className="text-xs px-3 pu-1.5 font-medium rounded-md transition border-2 bg-red-50 hover:bg-red-100 text-red-600 border-red-300">Delete</button>
                            </div>


                        </div>
                    ))
                    }
                </div>

            )}

        </div>
    );
}