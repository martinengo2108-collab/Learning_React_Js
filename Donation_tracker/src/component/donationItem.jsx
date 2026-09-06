import { useState } from "react";

export default function donationItem({ donation, onDelete, onUpdateAmount }) {
    const [isEditingAmount, setIsEditingAmount] = useState(false);
    const [value, setValue] = useState(String(donation.amount));
    const [error, setError] = useState("");

    function startEditing() {
        setValue(String(donation.amount));
        setError("");
        setIsEditingAmount(true);
    }

    function handleSave(event) {
        event.preventDefault();
        const numericValue = Number(value);

        if (value.trim() === "" || Number.isNaN(numericValue) || numericValue <= 0) {
            setError("Enter an amount greater than 0.");
            return;
        }

        onUpdateAmount(donation.id, numericValue);
        setIsEditingAmount(false);
    }

    return (
        <li className="donation-item">
            <div className="donation-item__info">
                <span className="donation-item__donor">{donation.donor}</span>
                <span className="donation-item__date">{donation.date}</span>
            </div>

            <div className="donation-item__actions">
                {isEditingAmount ? (
                    <form className="donation-item__edit-form" onSubmit={handleSave}>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            aria-label={`Edit amount for ${donation.donor}`}
                            autoFocus
                        />
                        <button type="submit" className="donation-item__save">
                            Save
                        </button>
                        <button
                            type="button"
                            className="donation-item__cancel"
                            onClick={() => setIsEditingAmount(false)}
                        >
                            Cancel
                        </button>
                        {error && (
                            <span className="field-error donation-item__edit-error">
                                {error}
                            </span>
                        )}
                    </form>
                ) : (
                    <button
                        type="button"
                        className="donation-item__amount donation-item__amount--editable"
                        onClick={startEditing}
                        title="Click to edit amount"
                    >
                        {donation.amount.toLocaleString()} FCFA
                    </button>
                )}

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