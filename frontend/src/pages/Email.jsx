import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmailGenerator from "../components/EmailGenerator";

export default function Email() {

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

                <div className="email-container">

                    <h1 className="email-title">
                        Negotiation Email Generator
                    </h1>

                    <p className="email-subtitle">
                        Generate professional settlement request emails.
                    </p>

                    <EmailGenerator />

                </div>

            </div>

        </div>

    );

}