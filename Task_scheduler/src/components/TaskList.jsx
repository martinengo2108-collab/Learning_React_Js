import React from "react"

export default function TaskList({tasks,onToggleStatus}){
    return(
        <div>
            <h3
            className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-700 pb-2">
                Registered tasks

            </h3>
        </div>
    )
}