import TotalRaised from "./totalRaised.jsx";
import DonorCount from "./donorCount.jsx";


import ProgressBar from "./progressBar.jsx";
import DonationForm from "./donationForm.jsx";
import DonationList from "./donationList.jsx";

export default function DashBoard({ donations
    , goal,
     onAddDonation,
      onUpdateGoal, onDeleteDonation
     }) {
    const totalRaised = donations.reduce((sum, d) => sum + d.amount, 0);
    const remaining = Math.max(goal - totalRaised, 0);
    const donorCount = donations.length;
    const percentFunded =goal >0 ? Math.min((totalRaised / goal) * 100 ,100): 0;

    const topDonation = donations.length >0
    ? donations.reduce((max, d) => (d.amount > max.amount ? d : max)) :null;

    return (
        <main
        className="dashboard">

            <section className="stat-grid"
            aria-label="Campaign summary">
               < TotalRaised amount={totalRaised} goal={goal} />

               <div className="stat-card">
                <span className="stat-label">Remaining</span>

                <span className="stat-value">{remaining <=0 ? "0" : remaining.toLocaleString()} FCFA</span>
               </div>
            </section>
        </main>
    )


};