import api from "./api";

export const getLoans = async () => {
    const response = await api.get("/loans");
    return response.data;
};

export const addLoan = async (loan) => {
    const response = await api.post("/add-loan", loan);
    return response.data;
};

export const deleteLoan = async (loanId) => {
    const response = await api.delete(`/loan/${loanId}`);
    return response.data;
};