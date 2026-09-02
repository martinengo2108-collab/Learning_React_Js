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
            className="goal-edit-trigger" onClick={startEditing}>
                Edit Goal
            </button>
        );
    }
    return(
        <form className="goal-edit-form" onSubmit={handleSave}>
            <input
                type="number"
                min="0"
                step="1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="Edit goal amount"
                autoFocus
            />
            <button type="submit" className="goal-edit-save">
                Save
            </button>
            
            <button
                type="button"
                className="goal-edit-cancel"
                onClick={() => setIsEditing(false)}
            >
                Cancel
            </button>
            {error && <span className=" field-error goal-edit-error">{error}</span>}
        </form>
    )



}
