import { Badges } from "./badges.model"

export interface Skill{
    id: string,
    id_adv: string
    cd: number
    active?: boolean
    success: Array<Badges|string>
    critical_success?: Array<Badges|string>,
    fail?: string,
    critical_fail?: string
    badges_need?: Array<Badges>
    ripetible: boolean
}