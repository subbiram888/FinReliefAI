import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AIScore from "../components/AIScore";
import { getFinancialHealth } from "../services/financialHealth";
import "../styles/financialhealth.css";

export default function FinancialHealth() {

    const [health, setHealth] = useState({
        monthly_income: 0,
        monthly_expenses: 0,
        savings: 0,
        debt_ratio: 0,
        total_emi: 0,
        total_outstanding: 0,
        stress_level: "Low"
    });

    useEffect(() => {
        loadHealth();
    }, []);

    const loadHealth = async () => {
        try {
            const data = await getFinancialHealth();
            setHealth(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div
            style={{
                display: "flex",
                background: "#0b1020",
                minHeight: "100vh"
            }}
        >

            <Sidebar />

            <div style={{ flex: 1 }}>

                <Navbar />

                <div className="health-container">

                    <h1 className="health-title">
                        Financial Health
                    </h1>

                    <p className="health-subtitle">
                        AI analysis of your financial condition
                    </p>

                    <div className="health-grid">

                        <div className="health-card">
                            <p>Monthly Income</p>
                            <h2 className="green">
                                ₹{health.monthly_income}
                            </h2>
                        </div>

                        <div className="health-card">
                            <p>Monthly Expenses</p>
                            <h2 className="red">
                                ₹{health.monthly_expenses}
                            </h2>
                        </div>

                        <div className="health-card">
                            <p>Savings</p>
                            <h2 className="blue">
                                ₹{health.savings}
                            </h2>
                        </div>

                        <div className="health-card">
                            <p>Debt Ratio</p>
                            <h2 className="orange">
                                {health.debt_ratio.toFixed(2)}%
                            </h2>
                        </div>

                    </div>

                    <AIScore health={health} />

                </div>

            </div>

        </div>

    );
}