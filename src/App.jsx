import { useState, useEffect } from "react";

import dashBoard from "./component/dashBoard.jsx";

const donations_keys = "TiC_donations";
const default_goal = 100000;
const goal_key = "TiC_goal";

function loadDonations() {
    try {
        const stored = localStorage.getItem(donations_keys);

        return stored ? JSON.parse(stored) : [];
    }
    catch {
        return [];
    }

}
function loadGoal() {
    try {
        const stored = localStorage.getItem(goal_key);
        const parsed = stored ? Number(stored) : default_goal;
        return Number.isFinite(parsed) && parsed > 0 ? parsed : default_goal;
    }
    catch {
        return default_goal;
    }
}
export default function App() {

    const [donations, setDonations] = useState(loadDonations);
    const [goal, setGoal] = useState(loadGoal);

    useEffect(() => {
        localStorage.setItem(donations_keys, JSON.stringify(donations));
    }, [donations]);

    useEffect(() => {
        localStorage.setItem(goal_key, String(goal));
    }, [goal]);

    function addDonation(donation) {
        const nextId = donations.length > 0 ? Math.max(...donations.map((d) => d.id)) + 1 : 1;
        const newDonation = {
            id: nextId 
            donor: donation.donor,
            amount: donation.amount,
            date: new Date().toISOString().slice(0, 10),

        };
        setDonations((prev) => [newDonation, ...prev])
    }
    function deleteDonation(id) {
        setDonations((prev) => prev.filter((d) => d.id !== id));
    }

    return (
        <div className="app-shell">
            <header className="app-header">
                <span className="app-eyebrow">TiC donation campaign </span>
                <h1 className="app-title">Donation Tracker</h1>
            </header>
            <Dashboard donations={donations}
                goal={goal}
                onAddDonation={addDonation}
                onUpdateGoal={UpdateGoal}
            />
            <footer className="app-footer">
                Built for the TiC internship program &middot; saved locally in
                your browser, no backend connected yet
            </footer>
        </div>
    )
}