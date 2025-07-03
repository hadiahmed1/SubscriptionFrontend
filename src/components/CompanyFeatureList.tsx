import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import type { Feature } from "../types/feature.type";
import api from "../utils/axiosInstace";
import useUser from "../hooks/useUser";
import FeatureList from "./FeatureList";

const CompanyFeatureList = () => {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUser();
    useEffect(() => {
        const getPlans = async () => {
            setLoading(true)
            try {
                const res = await api.get<Feature[]>(`feature/${user?.id}`);
                setFeatures(res.data);
            } catch (error) {
                setError("Failed to fetch features:" + error);
            } finally {
                setLoading(false);
            }
        };

        getPlans();
    }, [user?.id]);
    useEffect(() => {
        console.log(error);
    }, [error])

    return (<>
        {
            loading ? <CircularProgress size={40} /> : <FeatureList features={ features} />
        }
    </>)
}

export default CompanyFeatureList;