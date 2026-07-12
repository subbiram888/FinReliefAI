import axios from "axios";

const api = axios.create({
    baseURL: "https://finreliefai-6a5c.onrender.com",
});

// Add JWT token to every request
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

// Auto logout if token expires
api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response && error.response.status === 401) {

            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_name");

            window.location.href = "/login";

        }

        return Promise.reject(error);

    }

);

export default api;