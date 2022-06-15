export interface CumulesTreasure{
    id: string,
    id_adv: string,
    cumulo: Array<Treasure>
}

export interface Treasure{
    mr?: number,
    ma?: number,
    mo?: number,
    mp?:number,
    g10?: number,
    g50?:number,
    g100?: number,
    g500?: number,
    g1000?:number,
    g5000?:number
}

export const g10 = [
    "Agata ad occhio (cerchi grigi, bianchi, marroni, blu o verdi traslucidi)",
    "Agata muschiata (rosa o giallo o bianco traslucido con chiazze grigie muschio o verdi)",
    "Agata striae (marrone, blu, bianco o rosso traslucido e striato)",
    "Azzurrite (blu scuro opaco e maculato)",
    "Ematite (nero o grigio opaco)",
    "Lapislazzuli (blu o azzurro opaco con pagliuzze gialle)",
    "Malachite (verde chiaro o scuro opaco e striato)",
    "Occhio di tigre (marrone traslucido con un centro dorato)",
    "Ossidiana (nero opaco)",
    "Quarzo blu (azzurro trasparente)",
    "Rodocrosite (rosa chiaro opaco)",
    "Turchese (verde-azzurro chiaro opaco)"
]

export const g50 = [
    "Calcedonio (bianco opaco)",
    "Citrino (giallo-marrone chiaro trasparente)",
    "Corn:ola (arancione o rosso-marrone opaco)",
    "Crisoprasio (verde traslucido)",
    "Diaspro (blu, nero o ma rrone opaco)",
    "Eliotropi a (grigio scuro opaco con pagliuzze rosse)",
    "Onice (Sande opache blanche e flare, oppwe nero o bianco puro)",
    "Quarto (bianco, grigio fumo o gia10 trasparente)",
    "Quarzo rosa di stella (pietra rosea traslucida con un centro bianco a forma di Stella)",
    "Sardon'ce (bande opache rosse e blanche)",
    "Selenite (bianco traslucido con un bagliore azzurro pallido)",
    "Zircone (blu-verde pallido trasparente)",
]

export const g100 = [
    "Ambra (dall'oro diluito trasparente all'oro intenso)",
    "Ametista (viola scuro trasparente)",
    "Corallo (cremisi opaco)",
    "Crisoberillo (da giallo, verde a verde chiaro trasparente)",
    "Giada (verde chiaro, verde intenso o bianco traslucido)",
    "Giaietto (nero interso opaco)",
    "Granato (rosso. marrone-verdeo viola trasparente)",
    "Perla (biancoi giallo o rosa opaco brillante)",
    "Spinello (rosso. rossoimarrone o verde scuro trasparente)",
    "Tormalina (verde pallido o blu. marrone o rosso trasparente)",
]

export const g500 = [
    "Acquamarina (blu-verde pall do trasparente)",
    "Alessandrite (verde scuro trasparente)",
    "Peridoto (verde oliva intenso trasparente)",
    "Perla nera (nero opaco puro)",
    "Spinello blu (blu intenso trasparente)",
    "Topazio (giallo dorato trasparente)"
]

export const g1000 = [
    "Opale (blu pallido traslucido con chiazze verdi e dorate)",
    "Opale di fuoco (rosso infuocato traslucido)",
    "Opale nero (verde scuro traslucido con chiazze nere e pagliuzze dorate)",
    "Rubino stellato (rubino traslucido con un centro bianco a forma di stella)",
    "Smeraldo (verde intenso trasparente)",
    "Zaffiro blu (da blu-bianco a blu medio trasparente)",
    "Zaffiro giallo (giallo infuocato o giallo verde trasparente)",
    "Zaffiro steliato (zaffiro blu traslucido con un centro bianco a forma di stella)",
];

export const g5000 = [
    "Diamante (blu-bianco, canarino, rosa, marrone o biu trasparente)",
    "Giacinto (arancione infuocato trasparente)",
    "Rubino (da rosso chiaro a rosso cremisi trasparente)",
    "Zaffiro nero (nero tras!ucido con riflessi luminosi)",
]


    