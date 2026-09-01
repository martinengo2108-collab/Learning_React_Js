import { useState } from "react";

export default function GoalEditor({ goal, onUpdateGoal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(String(goal));
    const [error, setError] = useState("");

    function startEditing() {
        setValue(String(goal));
        setError("");

        setIsEditing(true);
    }

    function handleSave(event) {
        event.preventDefault();
        const numericValue = Number(value);
        if (value.trim() === "" || Number.isNaN(numericValue) || numericValue <= 0) {
            setError("The Goal must be a relevant amount");
            return;
        }
        onUpdateGoal(numericValue);
        setIsEditing(false);
    }
    if (!isEditing) {
        return (
            <button 
            type="button"
            className="goal-edit__trigger" onClick={startEditing}>
                Edit Goal
            </button>
        )
    }



}
