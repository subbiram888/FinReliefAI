import "../styles/aiscore.css";

export default function AIScore({ health }) {

    let score = 100;

    // Deduct score based on EMI ratio
    const emiRatio =
        health.monthly_income > 0
            ? (health.total_emi / health.monthly_income) * 100
            : 0;

    if (emiRatio >= 50) {
        score -= 30;
    } else if (emiRatio >= 30) {
        score -= 20;
    } else if (emiRatio >= 20) {
        score -= 10;
    }

    // Deduct if expenses are high
    const expenseRatio =
        health.monthly_income > 0
            ? (health.monthly_expenses / health.monthly_income) * 100
            : 0;

    if (expenseRatio >= 80) {
        score -= 20;
    } else if (expenseRatio >= 60) {
        score -= 10;
    }

    // Deduct if savings are very low
    if (health.savings < 5000) {
        score -= 10;
    }

    // Keep score between 0 and 100
    score = Math.max(0, Math.min(100, Math.round(score)));

    let status = "";
    let icon = "";
    let recommendations = [];

    if (score >= 80) {
        status = "Excellent Financial Health";
        icon = "🟢";

        recommendations = [
            "Continue saving every month.",
            "Maintain your current repayment discipline.",
            "Keep an emergency fund of at least 6 months.",
            "Avoid taking unnecessary new loans."
        ];
    } else if (score >= 60) {
        status = "Good Financial Health";
        icon = "🟡";

        recommendations = [
            "Try reducing monthly expenses.",
            "Increase monthly savings.",
            "Pay high-interest loans first.",
            "Avoid delaying EMI payments."
        ];
    } else if (score >= 40) {
        status = "Average Financial Health";
        icon = "🟠";

        recommendations = [
            "Reduce unnecessary spending.",
            "Prioritize loan repayment.",
            "Avoid taking additional loans.",
            "Increase emergency savings."
        ];
    } else {
        status = "Poor Financial Health";
        icon = "🔴";

        recommendations = [
            "Immediately reduce expenses.",
            "Contact lenders for restructuring.",
            "Avoid new debt.",
            "Focus on building savings."
        ];
    }

    return (

        <div className="ai-card">

            <h2>AI Financial Score</h2>

            <div className="ai-score">
                {score} / 100
            </div>

            <div className="ai-status">
                {icon} {status}
            </div>

            <h3
                style={{
                    marginTop: "35px"
                }}
            >
                AI Recommendations
            </h3>

            <ul className="ai-list">

                {recommendations.map((item, index) => (
                    <li key={index}>
                        ✔ {item}
                    </li>
                ))}

            </ul>

        </div>

    );

}