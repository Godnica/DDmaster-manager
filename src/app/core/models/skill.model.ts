import { Badges } from "./badges.model"

export interface Skill{
    id: string,
    title?: string
    description?: string
    id_adv: string
    cd: number
    active?: boolean
    type:string
    success: Array<Badges|string>
    critical_success?: Array<Badges|string>,
    fail?: string,
    critical_fail?: string
    badge_success?: Array<Badges|string>
    badge_critical_success?: Array<Badges|string>,
    badge_fail? : Array<Badges|string>,
    badge_critical_fail?: Array<Badges|string>,
    badges_need?: Array<Badges>
    ripetible: boolean
}


export enum tskills{
    "Atletica",
    "Acrobazia",
    "Furtività",
    "Rapidità di mano",
    "Arcano",
    "Indagare",
    "Natura",
    "Medicina",
    "Religione",
    "Storia",
    "Addestrare animali",
    "Percezione",
    "Intuizione",
    "Sopravvivenza",
    "Inganno",
    "Intimidire",
    "Intrattenere",
    "Persuazione"
}

export abstract class utility{
    static readonly skills = [
        {name: "Atletica",
        color: "", 
        car: "Forza"},
        {name: "Acrobazia",
        color: "", 
        car: "Destrezza"},
        {name: "Furtività",
        color: "", 
        car: "Destrezza"},
        {name: "Rapidità di mano",
        color: "", 
        car: "Destrezza"},
        {name: "Arcano",
        color: "", 
        car: "Intelligenza"},
        {name: "Indagare",
        color: "", 
        car: "Intelligenza"},
        {name: "Natura",
        color: "", 
        car: "Intelligenza"},
        {name: "Medicina",
        color: "", 
        car: "Intelligenza"},
        {name: "Religione",
        color: "", 
        car: "Intelligenza"},
        {name: "Storia",
        color: "", 
        car: "Intelligenza"},
        {name: "Addestrare animali",
        color: "#c919c9", 
        car: "Saggezza"},
        {name: "Percezione",
        color: "#c919c9", 
        car: "Saggezza"},
        {name: "Intuizione",
        color: "#c919c9", 
        car: "Saggezza"},
        {name: "Sopravvivenza",
        color: "#c919c9", 
        car: "Saggezza"},
        {name: "Inganno",
        color: "", 
        car:"carisma"},
        {name: "Intimidire",
        color: "", 
        car: "carisma"},
        {name: "Intrattenere",
        color: "", 
        car: "carisma"},
        {name: "Persuazione",
        color: "", 
        car: "carisma"}
    ]
}


export const  skillDifficulty= {
    "Molto Facile" :5,
    "Facile" :10,
    "Media" :15,
    "Difficile" :20,
    "Molto Difficile": 25,
    "Impossibile" :30
}