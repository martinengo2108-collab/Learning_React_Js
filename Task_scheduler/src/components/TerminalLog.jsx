import React from"react";

export default function TerminalLog({logs,onClear}){
        return(
            <div className="bg-slate-950 roundded-2xl border border-slate-800 p-5 flex flex-col shadow-2xl h-[530px]">
                <div className="flex items-center justify-between mb-4 border-b border-slate-900 pb-3">

                    <div className="flex items-center space-x-2">

                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>

                        <span className="text-xs font-mono tracking-wider text-slate-500 hover: text-dslate-300 uppercase transition"></span>
                    </div>

                    {logs.length > 0 && (
                        <button
                        
                        onClick={onClear}
                        className="text-[10px] font-mono tracking-wider text-slate-500 hover:text-slate-300 uppercase transition">
                            Clear Screen
                        </button>
                    )}

                </div>
                <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2.5 pr-2">
                    {logs.length === 0 && (
                        <div className="text-slate-600 italic">
                            Listening from background loops... State empty.
                        </div>
                    )}
                </div>
            </div>
        )
}
