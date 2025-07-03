import axios from "axios";
import api from "../utils/axiosInstace";
import type { Subscription } from "../types/subsctiption";

export const suscribeToPlan = async (planId: string) => {
    try {
        const res = await api.post(`/subscription/${planId}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error))
            console.error("Axios error:", error.response?.data || error.message);
        else
            console.error("Unexpected error:", error);
        throw error;
    }
}

export const fetchMySubscriptions = async (): Promise<Subscription[]> => {
    try {
        const res = await api.get<Subscription[]>('/subscription');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error))
            console.error("Axios error while fetching subscription:", error.response?.data || error.message);
        else
            console.error("Unexpected error while fetching subscription:", error);
        throw error;
    }
};