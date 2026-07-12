import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SettlementCalculator from "../components/SettlementCalculator";

export default function Settlement() {

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

                <div className="settlement-container">

                    <h1 className="settlement-title">
                        Settlement Predictor
                    </h1>

                    <p className="settlement-subtitle">
                        AI-powered prediction for your loan settlement amount.
                    </p>

                    <SettlementCalculator />

                </div>

            </div>

        </div>

    );

}