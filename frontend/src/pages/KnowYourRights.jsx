import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function KnowYourRights() {

    const rights = [

        {
            title: "🚫 No Harassment",
            text: "Recovery agents cannot threaten, abuse or intimidate borrowers."
        },

        {
            title: "📄 Written Settlement",
            text: "Always ask the bank for a written settlement offer."
        },

        {
            title: "✅ Right to NOC",
            text: "After settlement, you must receive a No Objection Certificate."
        },

        {
            title: "⚖️ RBI Complaint",
            text: "If treated unfairly, you can file a complaint with the RBI Ombudsman."
        },

        {
            title: "🏦 Loan Statement",
            text: "Banks must provide your loan statement whenever requested."
        },

        {
            title: "📞 Recovery Timings",
            text: "Recovery agents should contact you only during reasonable hours."
        }

    ];

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

                <div
                    style={{
                        padding: "35px"
                    }}
                >

                    <h1
                        style={{
                            color: "white",
                            marginBottom: "10px"
                        }}
                    >
                        ⚖️ Know Your Rights
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            marginBottom: "35px"
                        }}
                    >
                        Learn about your legal rights as a borrower in India.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                            gap: "20px"
                        }}
                    >

                        {rights.map((item, index) => (

                            <div
                                key={index}
                                style={{
                                    background: "#111827",
                                    border: "1px solid #1e293b",
                                    borderRadius: "16px",
                                    padding: "25px"
                                }}
                            >

                                <h3
                                    style={{
                                        color: "#3b82f6",
                                        marginBottom: "15px"
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        color: "#cbd5e1",
                                        lineHeight: "1.7"
                                    }}
                                >
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                    <div
                        style={{
                            marginTop: "40px",
                            background: "#111827",
                            padding: "30px",
                            borderRadius: "18px",
                            border: "1px solid #1e293b"
                        }}
                    >

                        <h2
                            style={{
                                color: "white",
                                marginBottom: "20px"
                            }}
                        >
                            📋 If You Face Harassment
                        </h2>

                        <ol
                            style={{
                                color: "#cbd5e1",
                                lineHeight: "2"
                            }}
                        >

                            <li>Stay calm and never argue aggressively.</li>

                            <li>Record calls or keep copies of messages.</li>

                            <li>Ask for the recovery agent's identity card.</li>

                            <li>Inform the bank immediately.</li>

                            <li>If the issue continues, file a complaint with the RBI Ombudsman.</li>

                        </ol>

                    </div>

                    <div
                        style={{
                            marginTop: "30px",
                            background: "#0f172a",
                            border: "1px solid #3b82f6",
                            padding: "25px",
                            borderRadius: "16px"
                        }}
                    >

                        <h2
                            style={{
                                color: "#3b82f6"
                            }}
                        >
                            💡 Pro Tip
                        </h2>

                        <p
                            style={{
                                color: "#cbd5e1",
                                marginTop: "10px",
                                lineHeight: "1.8"
                            }}
                        >
                            Always negotiate in writing, keep payment receipts,
                            request a No Objection Certificate (NOC), and never
                            make cash payments without official acknowledgement.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}