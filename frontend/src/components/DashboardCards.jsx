import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard";

export default function DashboardCards({ refreshKey }) {

    const [dashboard, setDashboard] = useState({
        total_loans: 0,
        total_outstanding: 0,
        total_emi: 0,
        monthly_surplus: 0,
        stress_level: "LOW"
    });

    const loadDashboard = async () => {
        try {
            const data = await getDashboard();
            setDashboard(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadDashboard();
    }, [refreshKey]);

    const cards = [
        {
            title: "Monthly Surplus",
            value: `₹ ${dashboard.monthly_surplus}`,
            color:
                dashboard.monthly_surplus >= 0
                    ? "#10b981"
                    : "#ef4444"
        },
        {
            title: "Total Outstanding",
            value: `₹ ${dashboard.total_outstanding}`,
            color: "#ffffff"
        },
        {
            title: "Total EMI",
            value: `₹ ${dashboard.total_emi}`,
            color: "#ffffff"
        },
        {
            title: "Stress Level",
            value: dashboard.stress_level,
            color:
                dashboard.stress_level === "LOW"
                    ? "#10b981"
                    : dashboard.stress_level === "MEDIUM"
                        ? "#f59e0b"
                        : "#ef4444"
        }
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                marginBottom: "25px"
            }}
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    style={{
                        background: "#111827",
                        padding: "24px",
                        borderRadius: "18px",
                        border: "1px solid #1f2937"
                    }}
                >
                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "13px",
                            marginBottom: "10px"
                        }}
                    >
                        {card.title}
                    </p>

                    <h2
                        style={{
                            color: card.color,
                            margin: 0,
                            fontSize: "32px"
                        }}
                    >
                        {card.value}
                    </h2>
                </div>
            ))}
        </div>
    );
}