import { NavLink, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");

        navigate("/login");

    };

    return (

        <div className="sidebar">

            <div className="sidebar-logo">

                💰 FinRelief AI

            </div>

            <div className="sidebar-menu">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    📊 Dashboard
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    👤 Profile
                </NavLink>

                <NavLink
                    to="/financial-health"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    💚 Financial Health
                </NavLink>

                <NavLink
                    to="/settlement"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    🎯 Settlement Predictor
                </NavLink>

                <NavLink
                    to="/ai-negotiation"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    🤖 AI Negotiation
                </NavLink>

                <NavLink
                    to="/email"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    ✉️ Negotiation Email
                </NavLink>

                <NavLink
                    to="/know-your-rights"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    ⚖️ Know Your Rights
                </NavLink>

                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    🕘 History
                </NavLink>

            </div>

            <button
                onClick={logout}
                className="logout-btn"
            >
                🚪 Logout
            </button>

        </div>

    );

}