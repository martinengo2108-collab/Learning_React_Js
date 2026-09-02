export default function donationItem({ donation, onDelete }) {
    return (
        <li className="donation-item">
            <div className="donation-item__info">
                <span className="donation-item__donor">{donation.donor}</span>
                <span className="donation-item__date">{donation.date}</span>

            </div>
            <div className="donation-item__actions">
                <span className="donation-item__amount">
                    {donation.amount.toLocaleString()} FCFA
                </span>
                <button
                    type="button"
                    className="donation-item__delete"
                    onClick={() => onDelete(donation.id)}
                    aria-label={`Delete donation from ${donation.donor}`}>
                    Delete
                </button>
            </div>
        </li>
    );
}