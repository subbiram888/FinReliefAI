import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getProfile, updateProfile } from "../services/profile";
import "../styles/profile.css";

export default function Profile() {

    const [profile, setProfile] = useState({
        full_name: "",
        email: "",
        monthly_income: 0,
        monthly_expenses: 0,
        savings: 0,
        employment_type: ""
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const data = await getProfile();
            setProfile(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const saveProfile = async () => {
        try {
            await updateProfile(profile);
            alert("Profile Updated Successfully!");
        } catch (err) {
            console.log(err);
        }
    };

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

                <div className="profile-container">

                    <h1>Profile</h1>

                    <div className="profile-card">

                        <label>Full Name</label>
                        <input
                            name="full_name"
                            value={profile.full_name}
                            onChange={handleChange}
                        />

                        <label>Email</label>
                        <input
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                        />

                        <label>Monthly Income</label>
                        <input
                            type="number"
                            name="monthly_income"
                            value={profile.monthly_income}
                            onChange={handleChange}
                        />

                        <label>Monthly Expenses</label>
                        <input
                            type="number"
                            name="monthly_expenses"
                            value={profile.monthly_expenses}
                            onChange={handleChange}
                        />

                        <label>Savings</label>
                        <input
                            type="number"
                            name="savings"
                            value={profile.savings}
                            onChange={handleChange}
                        />

                        <label>Employment Type</label>
                        <input
                            name="employment_type"
                            value={profile.employment_type}
                            onChange={handleChange}
                        />

                        <button onClick={saveProfile}>
                            Save Profile
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}