import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import type { Feature } from "../types/feature.type";
import api from "../utils/axiosInstace";
import useUser from "../hooks/useUser";
import FeatureList from "./FeatureList";
import { toast } from "react-toastify";

const CompanyFeatureList = () => {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUser();
    useEffect(() => {
        const getPlans = async () => {
            setLoading(true)
            try {
                if (!user?.id) return;
                const res = await api.get(`feature/${user?.id}`);
                setFeatures(res.data);
            } catch (error) {
                toast.error("Failed to fetch features")
                setError("Failed to fetch features:" + error);
            } finally {
                setLoading(false);
            }
        };

        getPlans();
    }, [user?.id]);
    useEffect(() => {
        if (error)
            console.log(error);
    }, [error])

    return (<>
        {
            loading ? <CircularProgress size={40} /> : <FeatureList features={features} />
        }
    </>)
}

export default CompanyFeatureList;