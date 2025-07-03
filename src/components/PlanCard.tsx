import { CardActions, Button, Collapse, Card, Box, Typography } from "@mui/material"
import { useState } from "react";
import type { Plan } from "../types/plan.type";
import FeatureList from "./FeatureList";
import PlanDeatils from "./PlanDetails";

const onSubscribe = (planId: string) => {
    console.log("Suscrive" + planId);
}

type Props = {
    plan: Plan; expiresOn?: string
}

const PlanCard = ({ plan, expiresOn }: Props) => {

    const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);

    const toggleFeatures = (planId: string) => {
        setExpandedPlanId((prev) => (prev === planId ? null : planId));
    };
    return (
        <Card key={plan.id} variant="outlined">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // column on small, row on medium+
                    justifyContent: 'space-around'
                }}
            >
                {/* Left side: PlanDetails */}
                <Box sx={{ p: 2 }}>
                    <PlanDeatils plan={plan} />
                    <Collapse in={expandedPlanId === plan.id} timeout="auto" unmountOnExit>
                        <FeatureList features={plan.features} />
                    </Collapse>
                </Box>

                {/* Right side: Buttons + Features */}
                <Box sx={{ p: 2 }}>
                    <CardActions
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            height: '100%',               // make CardActions fill parent Box height
                        }}
                    >
                        {expiresOn ? (
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                Expires on: {new Date(expiresOn).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Typography>
                        ) : (
                            <Button
                                size="small"
                                variant="contained"
                                onClick={() => onSubscribe(plan.id)}
                            >
                                Subscribe
                            </Button>
                        )}
                        <Button size="small" onClick={() => toggleFeatures(plan.id)}>
                            {expandedPlanId === plan.id ? 'Hide Features' : 'View Features'}
                        </Button>
                    </CardActions>
                </Box>

            </Box>

        </Card>

    )
}

export default PlanCard;
