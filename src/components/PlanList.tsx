import {
  Box,
} from '@mui/material';
import PlanCard from './PlanCard';
import type { Plan } from '../types/plan.type';


const PlanList = ({ plans }: { plans: Plan[] }) => {


  return (
    <Box display="grid" gap={2}>
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </Box>
  );
};

export default PlanList;
