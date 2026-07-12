export default function RightsCards() {

    const rights = [
        "Banks cannot threaten or physically harass borrowers.",
        "Recovery agents must follow RBI guidelines while collecting dues.",
        "You have the right to ask for your loan statement at any time.",
        "You can request loan restructuring if facing financial hardship.",
        "You have the right to negotiate a One-Time Settlement (OTS)."
    ];

    const tips = [
        "Never ignore calls from your lender.",
        "Always negotiate politely and professionally.",
        "Ask for every settlement agreement in writing.",
        "Keep receipts of every payment.",
        "Request a No Due Certificate after settlement."
    ];

    const recoveryRights = [
        "Recovery agents cannot use abusive language.",
        "No recovery calls during late night hours.",
        "No public humiliation or intimidation.",
        "Recovery agents must carry valid ID cards.",
        "You may file a complaint if harassment occurs."
    ];

    const faqs = [
        {
            question: "Can the bank force me to pay immediately?",
            answer:
                "No. Banks must follow RBI rules and legal procedures before taking any recovery action."
        },
        {
            question: "Can I negotiate my loan settlement?",
            answer:
                "Yes. Most lenders allow negotiation based on your financial condition."
        },
        {
            question: "Can recovery agents threaten me?",
            answer:
                "No. Threatening, abusing or harassing borrowers is against RBI guidelines."
        },
        {
            question: "Can I ask for EMI restructuring?",
            answer:
                "Yes. If you're facing genuine financial hardship, you can request restructuring."
        }
    ];

    return (

        <div>

            {/* RBI Rights */}

            <div className="rights-card">

                <h2>🏛 RBI Borrower Rights</h2>

                <ul>

                    {rights.map((item, index) => (

                        <li key={index}>
                            ✅ {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Recovery Rights */}

            <div className="rights-card">

                <h2>👮 Recovery Agent Rules</h2>

                <ul>

                    {recoveryRights.map((item, index) => (

                        <li key={index}>
                            🟢 {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Settlement Tips */}

            <div className="rights-card">

                <h2>💡 Loan Settlement Tips</h2>

                <ul>

                    {tips.map((item, index) => (

                        <li key={index}>
                            ✔ {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* AI Tip */}

            <div className="rights-card">

                <h2>🤖 AI Recommendation</h2>

                <p className="ai-tip">

                    If your EMI exceeds <b>50%</b> of your monthly income,
                    contact your lender early and request loan restructuring
                    before missing payments.

                </p>

            </div>

            {/* Emergency Contacts */}

            <div className="rights-card">

                <h2>📞 Important Contacts</h2>

                <table className="rights-table">

                    <thead>

                        <tr>

                            <th>Service</th>
                            <th>Contact</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>RBI Ombudsman</td>

                            <td>
                                https://cms.rbi.org.in
                            </td>

                        </tr>

                        <tr>

                            <td>National Consumer Helpline</td>

                            <td>
                                1915
                            </td>

                        </tr>

                        <tr>

                            <td>Consumer Helpline Website</td>

                            <td>
                                https://consumerhelpline.gov.in
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            {/* FAQ */}

            <div className="rights-card">

                <h2>❓ Frequently Asked Questions</h2>

                {

                    faqs.map((faq, index) => (

                        <details
                            key={index}
                            className="faq-item"
                        >

                            <summary>
                                {faq.question}
                            </summary>

                            <p>
                                {faq.answer}
                            </p>

                        </details>

                    ))

                }

            </div>

        </div>

    );

}