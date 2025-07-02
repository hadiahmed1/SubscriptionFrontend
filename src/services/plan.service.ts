import type { Plan } from "../types/plan.type";
import api from "../utils/axiosInstace";
import axios from "axios";

export const fetchAllPlans = async (): Promise<Plan[]> => {
    try {
        const res = await api.get<Plan[]>('/plan');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error))
            console.error("Axios error:", error.response?.data || error.message);
        else
            console.error("Unexpected error:", error);
        throw error;
    }
};
