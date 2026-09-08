import React from "react";

export default function TerminalLog({logs,onClear}){
        return(
            <div className="bg-white rounded-xl border-2 border-slate-200 border-t-4 border-t-blue-600 p-5 flex flex-col shadow-sm h-[530px]">
                <div className="flex items-center justify-between mb-4 border-b-2 border-slate-100 pb-3">

                    <div className="flex items-center space-x-2">

                        <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                            Activity log
                        </span>
                    

                    {logs.length > 0 && (
                        <button
                        
                        onClick={onClear}
                        className="text-[10px] font-mono tracking-wider text-slate-500 hover:text-slate-300 uppercase transition">
                            Clear Screen
                        </button>
                    )}
                    </div>

                </div>
                <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2.5 pr-2">
                    {logs.length === 0 && (
                        <div className="text-slate-400 italic">
                            No activity yet. Register a task to geet started.
                        </div>

                    )}
                    {logs.map((log,index) =>{
                        let tagstyle ="text-blue-700 bg-sky-60 border border-blue-200";

                        if(log.type === "success") tagstyle = "text-emerald-700 bg-emerald-50 border border-emerald-300";

                        if(log.type ==="warning") tagstyle="text-amber-700 bg-amber-60 border border-amber-300";

                        if(log.type ==="task") tagstyle="text-slate-700 bg-slate-100 border border-slate-300";

                        return(
                            <div
                            key={index}
                            className="leading-relaxed border-b border-slate-100 pb-1.5 last:border-0">
                                <span
                                className="text-slate-500 mr-2">[{log.timesstamp}]</span>
                                <span className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-boldd tracking-wide mr-2 ${tagstyle}`}>
                                    {log.sender}
                                </span>
                                <span
                                className="text-slate-700">{log.message}

                                </span>

                            </div>
                        );
                    })}
                </div>
            </div>
        );
}
