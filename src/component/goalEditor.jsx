import { useState } from "react";

export default function GoalEditor({ goal,onUpdateGoal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(String(goal));
}