import { Box } from "@mui/material";
import CompanyFeatureList from "../components/CompanyFeatureList";
import CompanyPlanList from "../components/CompanyPlanList";

const CompanyPage = () => {
    return (
        <>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box sx={{ flex: 3, overflow: "auto" }}>
                    <CompanyPlanList />
                </Box>
                <Box sx={{ flex: 2, overflow: "auto", px: 3 }}>
                    <CompanyFeatureList />
                </Box>
            </Box>
        </>
    );
}

export default CompanyPage;