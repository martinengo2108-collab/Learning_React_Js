import { useState, useEffect } from "react";

import DashBoard from "./component/dashBoard.jsx";

const donations_keys = "TiC_donations";
const default_goal = 100000;
const goal_key = "TiC_goal";
const history_key="TiC_history";

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

function loadHistory(){
    try{
        const stored =localStorage.getItem(history_key);

        return stored ? JSON.parse(stored):[];
    }
    catch{
        return [];
    }
}
export default function App() {

    const [donations, setDonations] = useState(loadDonations);
    const [goal, setGoal] = useState(loadGoal);

    const [history,setHistory] = useState(loadHistory);

    useEffect(() => {
        localStorage.setItem(donations_keys, JSON.stringify(donations));
    }, [donations]);

    useEffect(() => {
        localStorage.setItem(goal_key, String(goal));
    }, [goal]);
    
    useEffect(() => {
        localStorage.setItem(history_key,JSON.stringify(history));
    }, [history]);

    function addDonation(donation) {
        const nextId = donations.length > 0 ? Math.max(...donations.map((d) => d.id)) + 1 : 1;
        const newDonation = {
            id: nextId ,
            donor: donation.donor,
            amount: donation.amount,
            date: new Date().toISOString().slice(0, 10),

        };
        setDonations((prev) => [newDonation, ...prev])
    }

    function deleteDonation(id) {
        setDonations((prev) => prev.filter((d) => d.id !== id));
    }

    function upDateGoal(newGoal) {
        setGoal(newGoal);
    }

    function resetDonations(){

        setDonations([]);
    }
    function updateDonationAmount(id, newAmount){

        setDonations((prev) =>
        prev.map((d) => (d.id === id ? {...d, amount:newAmount} : d))
    );
}

function archiveCampaign(){

    if (donations.length ===0){
        window.alert("Nothing to archive yet -- add at least one donr first");

        return;
    }

    const confirmed = window.confirm(
        "Archive this campaign? Its donations will move to Past campaign and the current list will be cleared."
    );
    if (!confirmed){
        return;
    }
    const sortedDates = donations.map((d) => d.date).sort();

    const startDate = sortedDates[0];
    const endDate = sortedDates[sortedDates.length -1];

    const archivedcampaign ={
        id:Date.now(),
        goal,
        donations,
        startDate,
        endDate,
    };

    setHistory((prev) =>[archiveCampaign,...prev]);
    setDonations;
}

    return (
        <div className="app-shell">
            <header className="app-header">
                <span className="app-eyebrow">TiC donation campaign </span>
                <h1 className="app-title">Donation Tracker</h1>
            </header>
            <DashBoard donations={donations}
                goal={goal}
                history={history}
                onAddDonation={addDonation}
                onDeleteDonation={deleteDonation}
                onUpdateGoal={upDateGoal}
                onResetDonations={resetDonations}
                onUpdateDonationAmount={updateDonationAmount}
                onArchiveCampaign ={archiveCampaign}
            />
            <footer className="app-footer">

                  &copy; {new Date().getFullYear()} Martine Ngo Boumkwo. All rights reserved.
            </footer>
        </div>
    )
}