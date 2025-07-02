import type { Plan } from "./plan.type"

export type Subscription ={
    id:string
    plan: Plan
    expiresOn: string
}
