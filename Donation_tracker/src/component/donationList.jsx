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



                {donations.length > 0 && (
                    <div className="donation-list-header__actions">
                        <button type="button"
                            className="archive-campaign-button"
                            onClick={onArchiveCampaign}>
                            Archive campaign
                        </button>
                        <button type="button"
                            className="reset-all-button"
                            onClick={handleResetAll}>
                            Reset all
                        </button>
                    </div>


                )}
            </div>

            {donations.length === 0 ? (
                <p className="empty-state">
                    Add donations to get started</p>
            ) : (
                <ul className="donation-list">
                    {donations.map((donation) => (
                        <DonationItem
                            key={donation.id}
                            donation={donation}
                            onDelete={onDeleteDonation}
                            onUpdateAmount={onUpdateDonationAmount}
                        />

                    ))}
                </ul>
            )}
        </div>
    )
}