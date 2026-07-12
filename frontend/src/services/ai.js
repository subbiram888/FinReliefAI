import api from "./api";

export const getNegotiationStrategy = async () => {
    const response = await api.get("/ai-negotiation-strategy");
    return response.data;
};