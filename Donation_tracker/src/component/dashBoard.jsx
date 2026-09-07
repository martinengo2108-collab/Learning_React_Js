import TotalRaised from "./totalRaised.jsx";
import DonorCount from "./donorCount.jsx";


import ProgressBar from "./progressBar.jsx";
import DonationForm from "./donationForm.jsx";
import DonationList from "./donationList.jsx";
import CampaignHistory from "./campaignHistory.jsx";


export default function DashBoard({ donations
    , goal,
    history,
    onAddDonation,
    onUpdateGoal,
    onResetDonations,
    onUpdateDonationAmount,
     onDeleteDonation,
     onArchiveCampaign,
}) {
    const totalRaised = donations.reduce((sum, d) => sum + d.amount, 0);
    const remaining = Math.max(goal - totalRaised, 0);
    const donorCount = donations.length;
    const percentFunded = goal > 0 ? Math.min((totalRaised / goal) * 100, 100) : 0;

    const topDonation = donations.length > 0
        ? donations.reduce((max, d) => (d.amount > max.amount ? d : max)) : null;

    return (
        <main
            className="dashboard">

            <section className="stat-grid"
                aria-label="Campaign summary">
                < TotalRaised amount={totalRaised} goal={goal} />

                <div className="stat-card">
                    <span className="stat-label">Remaining</span>

                    <span className="stat-value">{remaining <= 0 ? "0" : remaining.toLocaleString()} FCFA</span>
                    <span className="stat-sublabel">{remaining <= 0 ? "Goal Reached" : "Remaining"}</span>
                </div>

                <DonorCount count={donorCount} />
            </section>

            <section className="progress-section"
                aria-label="Fundraising progress">
                <ProgressBar percent={percentFunded}
                    goal={goal}
                    raised={totalRaised}
                    onUpdateGoal={onUpdateGoal}/>
            </section>
            <section className="content-grid">
                <div className="content-column">
                    <DonationForm onAddDonation={onAddDonation} />

                    {topDonation && (
                        <div className="top-donor-card">
                            <span className="top-donor-label">Top Donation</span>
                            <span className="top-donor-name">{topDonation.donor}</span>
                            <span className="top-donor-amount">{topDonation.amount.toLocaleString()} FCFA</span>
                        </div>
                    )}
                </div>
                <div className="content-column">
                    <DonationList
                        donations={donations}
                        onDeleteDonation={onDeleteDonation}
                        onResetDonations={onResetDonations}
                        onUpdateDonationamount={onUpdateDonationAmount}
                        onArchiveCampaign={onArchiveCampaign} />
                </div>
            </section>
            <CampaignHistory history={history}/>
        </main>
    );


};