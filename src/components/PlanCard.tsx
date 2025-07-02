import { CardActions, Button, Collapse, Card } from "@mui/material"
import { useState } from "react";
import type { Plan } from "../types/plan.type";
import FeatureList from "./FeatureList";
import PlanDeatils from "./PlanDetails";

const onSubscribe = (planId: string) => {
    console.log("Suscrive" + planId);
}


const PlanCard = ({ plan }: { plan: Plan }) => {

    const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);

    const toggleFeatures = (planId: string) => {
        setExpandedPlanId((prev) => (prev === planId ? null : planId));
    };
    return (
        <Card key={plan.id} variant="outlined">
            <PlanDeatils plan={plan} />

            <CardActions>
                <Button size="small" onClick={() => toggleFeatures(plan.id)}>
                    {expandedPlanId === plan.id ? 'Hide Features' : 'View Features'}
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    onClick={() => onSubscribe?.(plan.id)}
                >
                    Subscribe
                </Button>
            </CardActions>

            <Collapse in={expandedPlanId === plan.id} timeout="auto" unmountOnExit>
                <FeatureList features={plan.features} />
            </Collapse>
        </Card>
    )
}

export default PlanCard;
