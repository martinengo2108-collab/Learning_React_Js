import React, { useState } from "react"

export default function TaskForm({ onAddTask }) {
    const [taskName, setTaskname] = useState("");

    const [intervalTime, setIntervalTime] = useState("");
    const [intervalUnit, setIntervalUnit] = useState("seconds");

    const [priority, setPriority] = useState("medium");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskName.trim() || !intervalTime) return;

        onAddTask(taskName, parseInt(intervalTime, 10),
            intervalUnit,
            priority);

        setTaskname("");
        setIntervalTime("");
        setIntervalUnit("seconds");
        setPriority("medium");
    };
    const priorityStyles = {
        low: "bg-[#A7F3DO] border-emerald-300 text-emeald-900",
        medium: "bg-[#FDE68A] border-amber-300 text-amber-900",
        high: "bg-[#FCA5A5] border-red-300 text-red-900"
    };
    return (
        <form onSubmit={handleSubmit}
            className="space-y-4 mb-8">
            <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">
                    Task Name
                </label>
                <input type="text"
                    placeholder="ex. Presentation, Submitting applications"
                    value={taskName}
                    onChange={(e) => setTaskname(e.target.value)}

                    className="w-full bg-white border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B5CF6] transition"
                    required
                />
            </div>

            <div>
                <label
                    className="block text-xs font-semibold text-slate-500 mb-2">
                    Run every
                </label>
                <div className="flex gap-2">
                    <input type="number"
                        min="1"
                        placeholder="30"
                        value={intervalTime}
                        onChange={(e) => setIntervalTime(e.target.value)}
                        className="w-full bg-white border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B5CF6] transition"
                        required />

                    <select value={intervalUnit}
                        onChange={(e) => setIntervalUnit(e.target.value)}
                        className="bg-[white] border-2 border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#8B5CF6] transition">
                        <option value="seconds">Seconds</option>
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                    </select>
                </div>
            </div>
            <div>
                <label
                    className="block text-xs font-semibold text-slate-500 mb-2">
                    Priority
                </label>
                <div className="flex gap-2">
                    {["low", "medium", "high"].map((level) => (
                        <button
                            key={level}
                            type="button"
                            onClick={() => setPriority(level)}
                            className={
                                `flex-1 text-xs font-medium py-2 rounded-lg border-2 capitalize transition
                                ${priority === level ? priorityStyles[level]:"bg-white border-slate-200 text-slate-400"
                                }`
                            }>
                                {level}


                        </button>
                    ))}
                </div>
            </div>

            <button type="submit"
                className="w-full bg-[#8B5CF6] hover:opacity-90 text-white font-semibold py-2.5 rounded-lg border-2 border-[#8B5CF6] transition duration-200">
                Register task
            </button>
        </form>
    );

};