import type { Company } from "./company.type";
import type { PlanFeature } from "./feature.type";

export type Plan = {
    id: string;
    name: string;
    description: string;
    cost: number;
    discount: number;
    company: Company;
    validity:number;
    features: PlanFeature[];
};