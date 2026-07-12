import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HistoryTable from "../components/HistoryTable";

export default function History() {

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

                <div className="history-container">

                    <h1 className="history-title">

                        Activity History

                    </h1>

                    <p className="history-subtitle">

                        View all your previous AI analyses and activities.

                    </p>

                    <HistoryTable />

                </div>

            </div>

        </div>

    );

}