import { CardContent, Typography, List, ListItem, ListItemText } from "@mui/material"
import type { PlanFeature } from "../types/feature.type";

const FeatureList = ({ features }: { features: PlanFeature[] }) => {
    return (
        <CardContent>
            <Typography variant="subtitle2" gutterBottom>
                Features:
            </Typography>
            <List dense>
                {features.map((feature) => (
                    <span key={feature.featureId}>
                        <ListItem >
                            <ListItemText
                                primary={feature.feature.name}
                                secondary={feature.feature.description}
                            />
                        </ListItem>
                    </span>
                ))}
            </List>
        </CardContent>
    )
}

export default FeatureList;