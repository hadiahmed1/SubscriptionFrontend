import { CardContent, Typography, List, ListItem, ListItemText } from "@mui/material"
import type { Feature } from "../types/feature.type";

const FeatureList = ({ features }: { features: Feature[] }) => {
    return (
        <CardContent>
            <Typography variant="subtitle2" gutterBottom>
                Features:
            </Typography>
            <List dense>
                {features.map((feature) => (
                    <span key={feature.id}>
                        <ListItem >
                            <ListItemText
                                primary={feature.name}
                                secondary={feature.description}
                            />
                        </ListItem>
                    </span>
                ))}
            </List>
        </CardContent>
    )
}

export default FeatureList;