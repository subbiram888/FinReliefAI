import { useState } from "react";
import "../styles/email.css";

export default function EmailGenerator() {

    const [bank, setBank] = useState("");
    const [loan, setLoan] = useState("");
    const [settlement, setSettlement] = useState("");
    const [email, setEmail] = useState("");

    const generateEmail = () => {

        if (!bank || !loan || !settlement) {
            alert("Please fill all fields.");
            return;
        }

        const text = `To,

The Branch Manager,
${bank}

Subject: Request for One Time Settlement

Dear Sir/Madam,

I hope you are doing well.

I respectfully request you to consider my loan account for a One-Time Settlement (OTS).

Loan Details

Bank Name : ${bank}

Outstanding Loan Amount : ₹${Number(loan).toLocaleString()}

Requested Settlement Amount : ₹${Number(settlement).toLocaleString()}

Due to temporary financial difficulties, I am unable to continue paying my EMIs regularly. I sincerely request you to consider my settlement proposal and provide a suitable settlement amount.

I assure you that I will make the agreed settlement payment immediately after approval.

Thank you for your understanding and support.

Yours faithfully,

Customer`;

        setEmail(text);
    };

    const copyEmail = async () => {

        try {

            await navigator.clipboard.writeText(email);

            alert("Email copied successfully!");

        } catch {

            alert("Unable to copy email.");

        }

    };

    const clearForm = () => {

        setBank("");
        setLoan("");
        setSettlement("");
        setEmail("");

    };

    return (

        <div className="email-card">

            <h2>Generate Negotiation Email</h2>

            <p>Bank Name</p>

            <input
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                placeholder="HDFC Bank"
            />

            <p>Outstanding Loan Amount</p>

            <input
                type="number"
                value={loan}
                onChange={(e) => setLoan(e.target.value)}
                placeholder="500000"
            />

            <p>Settlement Offer</p>

            <input
                type="number"
                value={settlement}
                onChange={(e) => setSettlement(e.target.value)}
                placeholder="300000"
            />

            <button
                className="generate-btn"
                onClick={generateEmail}
            >
                ✉ Generate Email
            </button>

            {email && (

                <div className="email-result">

                    <h2>Generated Email</h2>

                    <div
                        className="email-text"
                        style={{
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {email}
                    </div>

                    <button
                        className="generate-btn"
                        onClick={copyEmail}
                        style={{
                            marginTop: "20px"
                        }}
                    >
                        📋 Copy Email
                    </button>

                    <button
                        className="generate-btn"
                        onClick={clearForm}
                        style={{
                            marginTop: "10px",
                            background: "#475569"
                        }}
                    >
                        🗑 Clear
                    </button>

                </div>

            )}

        </div>

    );

}