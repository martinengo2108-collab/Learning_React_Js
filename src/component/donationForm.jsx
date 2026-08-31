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
            nextErrors.donor ="Name must be at least 2 characters.";

        }
        const numericAmount= Number(amount);
        if(amount.trim() === ""){
            nextErrors.amount = "Enter an amount.";
        }
        else if(Number.isNaN(numericAmount)){
            nextErrors.amount = "Amount must be greater than 0.";
        }
        return nextErrors;
    }
    function handleSubmit(event){
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length >0){
            setConfirmation("");
            return;
        }


    }
}