import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getNegotiationStrategy } from "../services/ai";
import "../styles/ai.css";

export default function AINegotiation() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadStrategy = async () => {

        try {

            setLoading(true);

            const response = await getNegotiationStrategy();

            setData(response);

        } catch (err) {

            console.log(err);

            alert("Unable to generate AI strategy.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadStrategy();

    }, []);

    return (

        <div
            style={{
                display: "flex",
                background: "#0b1020",
                minHeight: "100vh",
            }}
        >

            <Sidebar />

            <div style={{ flex: 1 }}>

                <Navbar />

                <div className="ai-container">

                    <h1 className="ai-title">
                        🤖 AI Negotiation Strategy
                    </h1>

                    <p className="ai-subtitle">
                        Personalized AI-powered negotiation advice for your loan.
                    </p>

                    {loading && (

                        <div className="ai-card">

                            <h2>🤖 AI is analyzing your loan...</h2>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    marginTop: "15px",
                                    fontSize: "16px"
                                }}
                            >
                                Gemini AI is generating a personalized negotiation strategy.
                            </p>

                            <p
                                style={{
                                    color: "#10b981",
                                    marginTop: "12px"
                                }}
                            >
                                ⏳ This usually takes 5–20 seconds...
                            </p>

                        </div>

                    )}

                    {!loading && (

                        data?.loan ? (

                            <>

                                <div className="ai-card">

                                    <h2>Loan Details</h2>

                                    <div className="loan-grid">

                                        <div>
                                            <p>Lender</p>
                                            <h3>{data.loan.lender_name}</h3>
                                        </div>

                                        <div>
                                            <p>Outstanding Amount</p>
                                            <h3>
                                                ₹{Number(data.loan.outstanding_amount).toLocaleString()}
                                            </h3>
                                        </div>

                                        <div>
                                            <p>Interest Rate</p>
                                            <h3>{data.loan.interest_rate}%</h3>
                                        </div>

                                        <div>
                                            <p>Overdue Months</p>
                                            <h3>{data.loan.overdue_months}</h3>
                                        </div>

                                    </div>

                                </div>

                                <div className="ai-card">

                                    <h2>AI Recommendation</h2>

                                    <div className="strategy-box">

                                        <pre>{data.strategy}</pre>

                                    </div>

                                </div>

                            </>

                        ) : (

                            <div className="ai-card">

                                <h2 style={{ textAlign: "center" }}>
                                    📭 No Loans Found
                                </h2>

                                <p
                                    style={{
                                        color: "#94a3b8",
                                        marginTop: "20px",
                                        fontSize: "17px",
                                        textAlign: "center",
                                    }}
                                >
                                    You haven't added any loans yet.
                                </p>

                                <p
                                    style={{
                                        color: "#10b981",
                                        marginTop: "10px",
                                        fontSize: "16px",
                                        textAlign: "center",
                                    }}
                                >
                                    ➜ Add a loan from the Dashboard to generate an AI negotiation strategy.
                                </p>

                            </div>

                        )

                    )}

                    <button
                        className="generate-btn"
                        onClick={loadStrategy}
                        disabled={loading}
                    >

                        {loading
                            ? "Generating AI Strategy..."
                            : "🔄 Generate Again"}

                    </button>

                </div>

            </div>

        </div>

    );

}