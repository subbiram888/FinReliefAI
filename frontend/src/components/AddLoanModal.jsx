import { useState } from "react";
import { addLoan } from "../services/loan";

export default function AddLoanModal({
    open,
    onClose,
    onLoanAdded
}) {

    const [loan, setLoan] = useState({
        lender_name: "",
        outstanding_amount: "",
        emi: "",
        interest_rate: "",
        overdue_months: ""
    });

    if (!open) return null;

    const handleChange = (e) => {
        setLoan({
            ...loan,
            [e.target.name]: e.target.value
        });
    };

    const saveLoan = async () => {

        await addLoan({
            lender_name: loan.lender_name,
            outstanding_amount: Number(loan.outstanding_amount),
            emi: Number(loan.emi),
            interest_rate: Number(loan.interest_rate),
            overdue_months: Number(loan.overdue_months)
        });

        onLoanAdded();
        onClose();
    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Add Loan</h2>

                <input
                    placeholder="Lender Name"
                    name="lender_name"
                    onChange={handleChange}
                />

                <input
                    placeholder="Outstanding Amount"
                    name="outstanding_amount"
                    onChange={handleChange}
                />

                <input
                    placeholder="Monthly EMI"
                    name="emi"
                    onChange={handleChange}
                />

                <input
                    placeholder="Interest Rate"
                    name="interest_rate"
                    onChange={handleChange}
                />

                <input
                    placeholder="Overdue Months"
                    name="overdue_months"
                    onChange={handleChange}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px"
                    }}
                >
                    <button onClick={saveLoan}>
                        Save Loan
                    </button>

                    <button onClick={onClose}>
                        Cancel
                    </button>
                </div>

            </div>

        </div>

    );
}