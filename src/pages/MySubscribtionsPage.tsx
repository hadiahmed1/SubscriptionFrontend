import { useState, useEffect } from "react";
import PlanCard from "../components/PlanCard";
import type { Subscription } from "../types/subsctiption";
import { fetchMySubscriptions } from "../services/subscription.service";
import { CircularProgress } from "@mui/material";


const MySubscribtionsPage = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSubscriptions = async () => {
            setLoading(true)
            try {
                const data = await fetchMySubscriptions();
                setSubscriptions(data);
            } catch (error) {
                setError("Failed to fetch plans:" + error);
            } finally {
                setLoading(false);
            }
        };

        getSubscriptions();
    }, []);
    useEffect(() => {
        if (error)
            console.log(error);
    }, [error])

    return (<>
        {
            loading ? <CircularProgress size={40} /> :
                subscriptions.map(sub => <PlanCard key={sub.id} plan={sub.plan} expiresOn={sub.expiresOn} />)
        }


    </>)
}

export default MySubscribtionsPage;

