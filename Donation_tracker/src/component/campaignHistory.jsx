import{useState} from "react";

export default function CampaignHistory({history}){
    const[openId,setOpenId]= useState(null);

    function toggleOpen(id){
        setOpenId =>((prev )=== id ? null:id)
    }
    function formatPeriod(startDate,endDate){
        return startDate=== endDate ? startDate: `${startDate} to ${endDate}`
    }
    if (!history || history.length===0){
        return null;
    }
    return(
        <section
        className="campaign-history"
        aria-label="Past Campaigns">
            <h2 className="form-title">Past Campaigns</h2>

            <ul
            className="campaign-history__list">
                {history.map((campaign)=>{

                    const totalRaised =campaign.donations.reduce(
                        (sum,d)=> sum+ d.amount,0
                        
                    );
                    const isOpen=openId=== campaign.id;
                    return(
                        <li
                        key={campaign.id}
                        className="campaign-history__item">
                            <button
                            type="button"
                            className="campaign-history__summary"
                            onClick={() => toggleOpen(campaign.id)}
                            aria-expanded={isOpen}>
                                <span
                                className="campaign-history__period">
                                    {formatPeriod(campaign.startDate,campaign.endDate)}
                                </span>
                                <span
                                className="campaign-history__totals">

                                    {totalRaised.toLocalestring()}/ {campaign.goal.toLocalestring()} FCFA &middot; {campaign.donations.length}{" "}
                                    {campaign.donations.length ===1 ? "donor ":"donors" }

                                </span>
                                <span
                                className="campaign-history__toogle"
                                >{isOpen ? "Hide donors": "View donors"}</span>
                            </button>
                            {isOpen && (
                                <ul
                                className="campaign-history__donors">
                                    {campaign.donations.map((donation)=>(
                                        <li
                                        key={donation.id}
                                        className="campaign-history__donor">
                                            <span
                                            className="campaign-history__donor-name">{donation.donor}</span>
                                            <span
                                            className="campaign-history__donor-date">
                                                {donation.date}
                                            </span>
                                            <span
                                            className="campaign-history__donor-amount">
                                                {donation.amount.toLocalestring()} FCFA
                                            </span>
                                        </li>
                                        
                                        ))}
                                    
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}