import { CardContent, Typography } from "@mui/material";
import type { Plan } from "../types/plan.type";

const PlanDeatils = ({ plan }: { plan: Plan }) => {
    return (
        <CardContent>
            <Typography variant="h6" gutterBottom>
                {plan.name} — by {plan.company.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {plan.description}
            </Typography>
            <Typography variant="subtitle1" mt={1}>
                ₹{plan.cost} {plan.discount > 0 && `(Discount: ${plan.discount}%)`}
            </Typography>
        </CardContent>
    )
}

export default PlanDeatils;