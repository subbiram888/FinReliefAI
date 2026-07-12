import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import ProfileCard from "../components/ProfileCard";
import LoanTable from "../components/LoanTable";

export default function Dashboard() {

    const [refreshKey, setRefreshKey] = useState(0);

    const refreshDashboard = () => {
        setRefreshKey((prev) => prev + 1);
    };

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

                <div
                    style={{
                        padding: "25px",
                    }}
                >
                    <DashboardCards refreshKey={refreshKey} />

                    <ProfileCard refreshKey={refreshKey} />

                    <LoanTable
                        onDashboardRefresh={refreshDashboard}
                    />
                </div>
            </div>
        </div>
    );
}