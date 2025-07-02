import { useEffect, useState } from "react";
import PlanList from "../components/PlanList";
import type { Plan } from "../types/plan.type";
import { fetchAllPlans } from "../services/plan.service";
import { CircularProgress } from "@mui/material";



const PlansPage = () => {

    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPlans = async () => {
            setLoading(true)
            try {
                const data = await fetchAllPlans();
                setPlans(data);
            } catch (error) {
                setError("Failed to fetch plans:" + error);
            } finally {
                setLoading(false);
            }
        };

        getPlans();
    }, []);
    useEffect(() => {
        console.log(error);

    }, [error])

    return (<>
        {loading ? <CircularProgress size={40} /> : <PlanList plans={plans} />}

    </>)
}

export default PlansPage;