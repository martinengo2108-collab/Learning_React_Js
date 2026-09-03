import DonationItem from "./donationItem.jsx"

export default function donationList({donations ,onDeleteDonation}){
    return (
        <div className="donation-list-card">
            <h2 className="form-title">Recent donations</h2>

            {donations.length ===0 ? (
                <p className="empty-state">Add donations to get started.</p>
            ):(
                <ul className="donation-list">
                    {donations.map((donation) =>(
                        <DonationItem 
                        key ={donation.id}
                        donation={donation}
                        onDelete={onDeleteDonation}/>
                    ))}
                </ul>
            )}
        </div>
    )
}