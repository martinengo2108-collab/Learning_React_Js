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
    )
}