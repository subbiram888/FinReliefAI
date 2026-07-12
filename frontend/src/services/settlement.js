import api from "./api";

export const getSettlementPrediction = async () => {
    const response = await api.get("/settlement-predictor");
    return response.data;
};