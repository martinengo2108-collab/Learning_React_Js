import { useState } from "react";

export default function DonationForm({onAddDonation}){
    const [donor,setDonor] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmation, setConfirmation] = useState("");

    function validate(){
        const nextErrors= {};
        if(!donor.trim()){
            nextErrors.donor = "Enter the donor's name ";
        } else if (donor.trim().length <2){
            
        }
    }
}