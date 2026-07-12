import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#060912",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ fontSize: "70px" }}>404</h1>

            <h2>Page Not Found</h2>

            <p style={{ color: "#94a3b8" }}>
                The page you requested does not exist.
            </p>

            <Link
                to="/dashboard"
                style={{
                    marginTop: "25px",
                    padding: "12px 24px",
                    background: "#2563eb",
                    color: "white",
                    borderRadius: "10px",
                    textDecoration: "none",
                }}
            >
                Go to Dashboard
            </Link>
        </div>
    );
}