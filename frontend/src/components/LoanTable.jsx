import { useEffect, useState } from "react";
import { getLoans, deleteLoan } from "../services/loan";
import AddLoanModal from "./AddLoanModal";
import "../styles/loantable.css";

export default function LoanTable({ onDashboardRefresh }) {

    const [loans, setLoans] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        loadLoans();
    }, []);

    const loadLoans = async () => {
        try {
            const data = await getLoans();
            setLoans(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleLoanAdded = () => {
        loadLoans();

        if (onDashboardRefresh) {
            onDashboardRefresh();
        }
    };

    const handleDelete = async (loanId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this loan?"
        );

        if (!confirmDelete) return;

        try {

            await deleteLoan(loanId);

            loadLoans();

            if (onDashboardRefresh) {
                onDashboardRefresh();
            }

        } catch (err) {

            console.log(err);

            alert("Unable to delete loan.");

        }

    };

    return (

        <div className="loan-card">

            <div className="loan-header">

                <h2>Active Loans</h2>

                <button
                    className="add-btn"
                    onClick={() => setOpen(true)}
                >
                    + Add Loan
                </button>

            </div>

            <table className="loan-table">

                <thead>

                    <tr>

                        <th>Lender</th>

                        <th>Amount</th>

                        <th>Monthly EMI</th>

                        <th>Interest</th>

                        <th>Overdue</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {loans.map((loan) => (

                        <tr key={loan.id}>

                            <td>{loan.lender_name}</td>

                            <td>
                                ₹{loan.outstanding_amount}
                            </td>

                            <td>
                                ₹{loan.emi}
                            </td>

                            <td>
                                {loan.interest_rate}%
                            </td>

                            <td>
                                {loan.overdue_months} Months
                            </td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(loan.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <AddLoanModal
                open={open}
                onClose={() => setOpen(false)}
                onLoanAdded={handleLoanAdded}
            />

        </div>

    );

}