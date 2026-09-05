import DonationItem from "./donationItem.jsx"

export default function donationList({ donations, onDeleteDonation,
    onResetDonations, onUpdateDonationAmount,
    onArchiveCampaign,

}) {
    function handleResetAll() {
        const confirmed = window.confirm(
            "Delete all donations?This can be undone"
        );
        if (confirmed) {
            onResetDonations();
        }
    }
    return (
        <div className="donation-list-card">
            <div className="donation-list-header">
                <h2 className="form-title">Recent donations</h2>

            </div>

            {donations.length === 0 ? (
                <p className="empty-state">Add donations to get started.</p>
            ) : (
                <ul className="donation-list">
                    {donations.map((donation) => (
                        <DonationItem
                            key={donation.id}
                            donation={donation}
                            onDelete={onDeleteDonation} />
                    ))}
                </ul>
            )}
        </div>
    )
}