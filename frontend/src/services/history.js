import api from "./api";

export const getHistory = async () => {
    const response = await api.get("/ai-history");
    return response.data;
};
