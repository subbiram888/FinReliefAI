import api from "./api";

export const getFinancialHealth = async () => {

    const response = await api.get("/financial-health");

    return response.data;

};