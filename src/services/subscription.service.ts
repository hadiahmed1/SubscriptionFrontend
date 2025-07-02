import axios from "axios";
import api from "../utils/axiosInstace";

export const suscribe = async (planId: string) => {
    try {
        const res = await api.get<unknown[]>('/subscription');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error))
            console.error("Axios error:", error.response?.data || error.message);
        else
            console.error("Unexpected error:", error);
        throw error;
    }
}