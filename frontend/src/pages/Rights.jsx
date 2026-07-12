import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightsCards from "../components/RightsCards";
import "../styles/rights.css";

export default function Rights() {

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

                <div className="rights-container">

                    <h1 className="rights-title">
                        ⚖️ Know Your Rights
                    </h1>

                    <p className="rights-subtitle">
                        Learn your legal rights as a borrower and understand how to deal with banks and recovery agents.
                    </p>

                    <RightsCards />

                </div>

            </div>

        </div>

    );

}