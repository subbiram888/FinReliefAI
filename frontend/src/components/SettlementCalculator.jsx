import { useEffect, useState } from "react";
import { getSettlementPrediction } from "../services/settlement";
import "../styles/settlement.css";

export default function SettlementCalculator() {

    const [loading, setLoading] = useState(true);
    const [loans, setLoans] = useState([]);

    const loadSettlement = async () => {
        try {
            setLoading(true);

            const data = await getSettlementPrediction();

            setLoans(data);

        } catch (err) {
            console.log(err);
            alert("Unable to load settlement prediction.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadSettlement();
    }, []);

    if (loading) {
        return (
            <div className="settlement-card">
                <h2>Calculating Settlement...</h2>
            </div>
        );
    }

    if (loans.length === 0) {
        return (
            <div className="settlement-card">
                <h2>No Loans Found</h2>
            </div>
        );
    }

    return (
        <div>

            {loans.map((loan) => (

                <div
                    key={loan.loan_id}
                    className="settlement-card"
                    style={{ marginBottom: "25px" }}
                >

                    <h2>{loan.lender_name}</h2>

                    <p>
                        <b>Outstanding:</b> ₹
                        {loan.outstanding_amount.toLocaleString()}
                    </p>

                    <p>
                        <b>Interest Rate:</b> {loan.interest_rate}%
                    </p>

                    <p>
                        <b>Monthly EMI:</b> ₹
                        {loan.emi.toLocaleString()}
                    </p>

                    <p>
                        <b>Overdue:</b> {loan.overdue_months} month(s)
                    </p>

                    <hr />

                    <h3>
                        Suggested Settlement :
                        {" "}
                        {loan.suggested_settlement_percentage}%
                    </h3>

                    <h2 style={{ color: "#22c55e" }}>
                        ₹
                        {Math.round(
                            loan.outstanding_amount *
                            loan.suggested_settlement_percentage /
                            100
                        ).toLocaleString()}
                    </h2>

                    <p>
                        <b>Risk Score:</b> {loan.risk_score}
                    </p>

                    <p>
                        <b>Risk Category:</b> {loan.risk_category}
                    </p>

                </div>

            ))}

        </div>
    );
}