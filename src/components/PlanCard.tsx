import { CardActions, Button, Collapse, Card, Box, Typography } from "@mui/material"
import { useState } from "react";
import type { Plan } from "../types/plan.type";
import FeatureList from "./FeatureList";
import PlanDeatils from "./PlanDetails";
import type { Feature } from "../types/feature.type";
import PayBtn from "./PayBtn";

type Props = {
    plan: Plan; expiresOn?: string
}

const PlanCard = ({ plan, expiresOn }: Props) => {

    const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);
    const features: Feature[] = plan.features.map(planFeature => planFeature.feature)
    const toggleFeatures = (planId: string) => {
        setExpandedPlanId((prev) => (prev === planId ? null : planId));
    };
    return (
        <Card key={plan.id} variant="outlined">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-around'
                }}
            >
                {/* Left side: PlanDetails */}
                <Box>
                    <PlanDeatils plan={plan} />
                    <Collapse in={expandedPlanId === plan.id} timeout="auto" unmountOnExit>
                        <FeatureList features={features} />
                    </Collapse>
                </Box>

                {/* Right side: Buttons + Features */}
                <Box>
                    <CardActions
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            height: '100%',
                        }}
                    >
                        {expiresOn ? (
                            // expiry date
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                Expires on: {new Date(expiresOn).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Typography>
                        ) : (
                            <PayBtn planId={plan.id} />
                        )}
                        {/* Toggle Plan Features Visibility */}
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
