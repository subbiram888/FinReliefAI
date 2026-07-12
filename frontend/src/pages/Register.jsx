import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/auth";
import "../styles/register.css";

export default function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {

        e.preventDefault();

        try {

            const data = await registerUser(
                fullName,
                email,
                password
            );

            alert(data.message);

            navigate("/login");

        } catch (error) {

            console.log(error);

            if (error.response) {
                alert(error.response.data.detail);
            } else {
                alert("Unable to connect to backend.");
            }

        }

    };

    return (

        <div className="register-page">

            <div className="left-section">

                <div className="logo-badge">
                    🚀 FinRelief AI
                </div>

                <h1>
                    Start Your Financial
                    <br />
                    Freedom Journey
                </h1>

                <p>
                    AI-powered debt settlement, financial analysis,
                    smart negotiation strategies, and financial health
                    tracking—all in one platform.
                </p>

            </div>

            <div className="right-section">

                <form
                    onSubmit={register}
                    className="register-card"
                >

                    <h2>Create Account</h2>

                    <p className="subtitle">
                        Register to continue using FinRelief AI
                    </p>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Create Account →
                    </button>

                    <p className="login-text">

                        Already have an account?

                        <Link to="/login">

                            Login

                        </Link>

                    </p>

                </form>

            </div>

        </div>

    );

}