export type PlanFeature={
    planId:string
    featureId: string
    feature:Feature
}
export type Feature = {
  id: string;
  companyId:string
  name: string;
  description: string;
};
