import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await axios.get(`${API}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateProfile = async (profile) => {

    const token = localStorage.getItem("token");

    const response = await axios.put(
        `${API}/update-profile`,
        profile,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};