import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/auth";
import "../styles/auth.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {

        e.preventDefault();

        try {

            const data = await loginUser(email, password);

            if (data.access_token) {

                localStorage.setItem("token", data.access_token);
                localStorage.setItem("user_id", data.user.id);
                localStorage.setItem("user_name", data.user.full_name);

                alert("Login Successful!");

                navigate("/dashboard");

            } else {

                alert("Invalid Email or Password");

            }

        } catch (err) {

            console.log(err);

            alert("Unable to connect to backend.");

        }

    };

    return (

        <div className="auth-page">

            <div className="auth-left">

                <h1 className="logo">
                    💰 FinRelief AI
                </h1>

                <h1 className="hero-title">
                    Take Control of Your
                    <br />
                    <span>Financial Future</span>
                </h1>

                <p className="hero-text">
                    AI-powered debt management that helps you negotiate smarter,
                    settle faster, and become debt free with personalized
                    financial insights.
                </p>

                <div className="feature-row">

                    <div className="feature-card">

                        <h3>40-75%</h3>

                        <p>
                            Average Settlement Prediction
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>🤖 AI</h3>

                        <p>
                            Smart Negotiation Strategy
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>100%</h3>

                        <p>
                            Secure & Private
                        </p>

                    </div>

                </div>

            </div>

            <div className="auth-right">

                <form
                    onSubmit={login}
                    className="auth-card"
                >

                    <h1>Welcome Back</h1>

                    <p>
                        Login to continue managing your finances.
                    </p>

                    <label>Email Address</label>

                    <input
                        type="email"
                        className="auth-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        className="auth-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        className="auth-btn"
                        type="submit"
                    >
                        Login
                    </button>

                    <div className="auth-footer">

                        Don't have an account?{" "}

                        <Link to="/register">
                            Register
                        </Link>

                    </div>

                </form>

            </div>

        </div>

    );

}