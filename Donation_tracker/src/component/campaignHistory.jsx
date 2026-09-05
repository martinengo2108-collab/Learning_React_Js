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
                        
                    )
                })}
            </ul>
        </section>
    )
}