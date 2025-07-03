import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCompanyPlans } from "../services/plan.service";
import type { Plan } from "../types/plan.type";
import PlanCard from "./PlanCard";

const CompanyPlanList = () => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPlans = async () => {
            setLoading(true)
            try {
                const data = await fetchCompanyPlans();
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
        {loading ? <CircularProgress size={40} /> : plans.map(plan => <PlanCard key={plan.id} plan={plan} />)}

    </>)
}

export default CompanyPlanList;