import { Badges } from "./badges.model"

export interface Skill{
    id: string,
    id_adv: string
    cd: number
    active?: boolean
    type:string
    success: Array<Badges|string>
    critical_success?: Array<Badges|string>,
    fail?: string,
    critical_fail?: string
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
        car: "Forza"},
        {name: "Acrobazia",
        car: "Destrezza"},
        {name: "Furtività",
        car: "Destrezza"},
        {name: "Rapidità di mano",
        car: "Destrezza"},
        {name: "Arcano",
        car: "Intelligenza"},
        {name: "Indagare",
        car: "Intelligenza"},
        {name: "Natura",
        car: "Intelligenza"},
        {name: "Medicina",
        car: "Intelligenza"},
        {name: "Religione",
        car: "Intelligenza"},
        {name: "Storia",
        car: "Intelligenza"},
        {name: "Addestrare animali",
        car: "Saggezza"},
        {name: "Percezione",
        car: "Saggezza"},
        {name: "Intuizione",
        car: "Saggezza"},
        {name: "Sopravvivenza",
        car: "Saggezza"},
        {name: "Inganno",
        car: "Carisma"},
        {name: "Intimidire",
        car: "Carisma"},
        {name: "Intrattenere",
        car: "Carisma"},
        {name: "Persuazione",
        car: "Carisma"}
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