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

                                    {totalRaised.toLocalestring()}/ {campaign.goal.toLocalestring()} FCFA &middot; {campaign.donations.length}{" "
                                    }

                                </span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}