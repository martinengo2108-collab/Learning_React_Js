export default function donationItem({donation , onDelete}){
    return(
        <li className="donation-item">
            <div className="donation-item__info">
                <span className="donation-item__donor">{donation.donor}</span>
                <span className="donation-item__date">{donation.date}</span>
            </div>
        </li>
    )
}