import { useState } from "react";

export default function DonationForm({onAddDonation}){
    const [donor,setDonor] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmation, setConfirmation] = useState("");


}