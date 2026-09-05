import{useState} from "react";

export default function CampaignHistory({history}){
    const[openId,setOpenId]= useState(null);

    function toggleOpen(id){
        setOpenId =>((prev )=== id ? null:id)
    }
    
}