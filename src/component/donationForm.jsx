import { useState } from "react";

export default function DonationForm({ onAddDonation }) {
    const [donor, setDonor] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmation, setConfirmation] = useState("");

    function validate() {
        const nextErrors = {};
        if (!donor.trim()) {
            nextErrors.donor = "Enter the donor's name ";
        } else if (donor.trim().length < 2) {
            nextErrors.donor = "Name must be at least 2 characters.";

        }
        const numericAmount = Number(amount);
        if (amount.trim() === "") {
            nextErrors.amount = "Enter an amount.";
        }
        else if (Number.isNaN(numericAmount)) {
            nextErrors.amount = "Amount must be greater than 0.";
        }
        return nextErrors;
    }
    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setConfirmation("");
            return;
        }

        onAddDonation({ donor: donor.trim(), amount: Number(amount) });

        setConfirmation(`Recorded ${Number(amount).toLocaleString()}FCFA from${donor.trim()}`);

        setDonor("");
        setAmount("");
        setErrors({});

    }

    return (
        <form className="donation-form" onSubmit={handleSubmit} noValidate>
            <h2 className="form-title">Record donations</h2>
            <div className="form-field">
                <label htmlFor="donor-name">Donor name</label>
                <input id="donor-name" type="text" value={donor}
                    onChange={(e) => setDonor(e.target.value)}
                    placeholder="ex. Martine Boumkwo"
                    aria-invalid={Boolean(errors.donor)}
                    aria-describedby={errors.donor ? "donor-error" : undefined} />
                {errors.donor && (
                    <span className="field-error" id="donor-error">
                        {error.donor}
                    </span>
                )}
            </div>
            <div className="form-field">
                <label htmlFor="donation-amount">Amount (FCFA)</label>
                <input
                    id="donation-amount"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 5000"
                    aria-invalid={Boolean(errors.amount)}
                    aria-describedby={errors.amount ? "amount-error" : undefined}
                />
            </div>
        </form>
    )

}