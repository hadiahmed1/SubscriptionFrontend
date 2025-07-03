import { Box } from "@mui/material";
import CompanyFeatureList from "../components/CompanyFeatureList";
import CompanyPlanList from "../components/CompanyPlanList";
import HeaderWithNavBtn from "../components/HeaderWIthNavBtn";

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
                <Box sx={{
                    flex: 3, overflow: "auto",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <HeaderWithNavBtn heading="Plan" navigateTo="addplan" />
                    <Box sx={{ flex: 1, overflow: "auto" }}>
                        <CompanyPlanList />
                    </Box>
                </Box>
                <Box sx={{
                    flex: 2, overflow: "auto",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <HeaderWithNavBtn heading="Feature" navigateTo="addfeature" />
                    <Box sx={{ flex: 1, overflow: "auto" }}>
                        <CompanyFeatureList />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CompanyPage;