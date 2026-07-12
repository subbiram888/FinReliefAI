import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {

    const navigate = useNavigate();

    const userName = localStorage.getItem("user_name") || "User";

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");

        alert("Logged out successfully!");

        navigate("/login");

    };

    return (

        <div className="navbar">

            <div>

                <div className="nav-title">

                    Dashboard Overview

                </div>

                <div className="nav-sub">

                    Your financial snapshot at a glance

                </div>

            </div>

            <div
                className="nav-right"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                }}
            >

                <span>
                    👋 Welcome, <b>{userName}</b>
                </span>

                <div className="avatar">

                    {userName.charAt(0).toUpperCase()}

                </div>

                <button
                    onClick={logout}
                    style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}