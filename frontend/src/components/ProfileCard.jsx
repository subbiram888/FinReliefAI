import { useEffect, useState } from "react";
import { getProfile } from "../services/profile";
import "../styles/profilecard.css";

export default function ProfileCard({ refreshKey }) {

    const [profile, setProfile] = useState({
        monthly_income: 0,
        monthly_expenses: 0,
        savings: 0,
    });

    const loadProfile = async () => {
        try {
            const data = await getProfile();
            setProfile(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadProfile();
    }, [refreshKey]);

    const debtRatio =
        profile.monthly_income > 0
            ? (
                (profile.monthly_expenses /
                    profile.monthly_income) *
                100
            ).toFixed(0)
            : 0;

    return (
        <div className="profile-card">

            <h2>Financial Profile</h2>

            <div className="profile-grid">

                <div>
                    <p>Monthly Income</p>
                    <h3>₹{profile.monthly_income}</h3>
                </div>

                <div>
                    <p>Monthly Expenses</p>
                    <h3>₹{profile.monthly_expenses}</h3>
                </div>

                <div>
                    <p>Savings</p>
                    <h3 className="green">
                        ₹{profile.savings}
                    </h3>
                </div>

                <div>
                    <p>Debt Ratio</p>
                    <h3 className="orange">
                        {debtRatio}%
                    </h3>
                </div>

            </div>

        </div>
    );
}