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
    g5000?:number,
    o25?:number,
    o250?:number,
    o750?:number,
    o2500?:number,
    o7500?:number
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

export const o25 = [
"Brocca d'argento",
"Statuetta d'osso intagliato",
"Braccialetto d'oro piccolo",
"Abiti d'oro",
"Maschera di velluto nero con ricami d'argento",
"Calice in rame con filigrana in argento",
"Coppia di dadi in osso incisi",
"Piccolo specchio incastonato in una cornice in legno dipinto",
"Fazzoletto di seta ricamato",
"Medaglione d'oro con un ritratto dipinto all'interno",
]

export const o250 = [
"Anello d'oro con eliotropie",
"Statuetta d'avorio intagliato",
"Braccialetto d'oro grande",
"Collana d'argento con pietra preziosa come pendente",
"Corona di bronzo",
"Veste di seta con ricami dorati",
"Grande arazzo pregiato",
"Boccale in ottone con intarsi di giada",
"Scatola di statuette di animali in pietra turchese",
"Gabbia dorata per uccelP con filigrana in electrum",

]


export const o750 = [
"Calice d'argento incastonato di seleniti",
"Spada lunga d'acciaio placcato in argento e con giaietto nell'elsa",
"Arpa intagliata in legno esotico con intarsi in avorio e di zirconi",
"Piccolo idolo d'oro massiccio",
"Pettine d'oro a Forma di drago con occhi di granato rosso",
"Tappo di bottiglia con foglie d'oro in rilievo incastonato di ametiste",
"Pugnale da cerimonia in electrum con una perla nera sul pomello",
"SpiIla in argento e oro",
"Statuetta di ossidiana con piedistallo e intarsi in oro",
"Maschera da guerra d'oro dipinta",

]

export const o2500 = [
"Catenina d'oro con opale di fuoco",
"Anticodipinto d'ottima fattura",
"Mantello in velluto e seta ricamato con numerose seleniti",
"Bracciale in platino con uno zaffiro incastonato",
"Guanti ricamati con schegge di gemme",
"Cavigliera decorata con pietre preziose",
"Carillon d'oro",
"Diadema in oro con quattro acquemarine",
"Benda per occhio con finto occhio in zaffiro e selenite",
"Collana formata da una fila di perline rosa",

]


export const o7500 = [
    "Corona d'oro con gemme",
    "Anello in platino con pietre preziose",
    "Statuetta d'oro incastonata di rubini",
    "Coppa d'oro incastonata di smeraldi",
    "Portagioie in oro con filigrana di platino",
    "Sarcofago da bambino in oro dipinto",
    "Tabellone da gioco in giada con pedine d'oro massiccio",
    "Corno da banchetto d'avorio ingioiellato con filigrana dorata",
]


export const tab0_4 = {
    monete : {
        mr: {
            lanci: 6,
            dado: 6,
            quantity: 100,
            standard: 2100
        },
        ma: {
            lanci: 3,
            dado: 6,
            quantity: 100,
            standard: 1050
        },
        mo: {
            lanci: 2,
            dado: 6,
            quantity: 10,
            standard: 70
        }
    },

    other: {
        6 : null,
        16 : {
            lanci: 2,
            dado: 6,
            treasure: "g10"
        },
        26: {
            lanci: 2,
            dado: 4,
            treasure: "o25"
        },
        36: {
            lanci: 2,
            dado: 6,
            treasure: "g50"            
        },
        44: {
            lanci: 2,
            dado: 6,
            treasure: "g10",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        52: {
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        60: {
            lanci: 2,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        65: {
            lanci: 2,
            dado: 6,
            treasure: "g10",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        70: {
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        75: {
            lanci: 2,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        78: {
            lanci: 2,
            dado: 6,
            treasure: "g10",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        80: {
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        85:{
            lanci: 2,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        92: {
            lanci: 2,
            dado:4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        97: {
            lanci: 2,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        99: {
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "G"
            }]
        },
        100:{
            lanci: 2,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "G"
            }]
        }

    }

}


export const tab5_10 = {
    monete : {
        mr: {
            lanci: 2,
            dado: 6,
            quantity: 100,
            standard: 700
        },
        ma: {
            lanci: 2,
            dado: 6,
            quantity: 1000,
            standard: 7000
        },
        mo:{
            lanci: 6,
            dado: 6,
            quantity: 100,
            standard: 2100
        },
        mp: {
            lanci: 3,
            dado: 6,
            quantity: 10,
            standard: 105
        }
    },
    other: {
        4: null,
        10: {
            lanci: 2,
            dado: 4,
            treasure: "o25"
        },
        16:{
            lanci: 3,
            dado: 6,
            treasure: "g50"
        },
        22:{
            lanci: 3,
            dado: 6,
            treasure: "g100"
        },
        28:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
        },
        32:{
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        36:{
            lanci: 3,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        40:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        44:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 6,
                table: "A"
            }]
        },
        49:{
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        54:{
            lanci: 3,
            dado: 6,
            treasure: "g50",
             magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        59:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
             magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        63:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
             magic:[ {
                lanci: 1,
                dado: 4,
                table: "B"
            }]
        },
        66:{
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        69:{
            lanci: 3,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        72:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        74:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "C"
            }]
        },
        76:{
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "D"
            }]
        },
        78:{
            lanci: 3,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "D"
            }]
        },
        79:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "D"
            }]
        },
        80:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "D"
            }]
        },
        84:{
            lanci: 2,
            dado: 4,
            treasure: "o25",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        88:{
            lanci: 3,
            dado: 6,
            treasure: "g50",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        91:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        94:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "F"
            }]
        },
        96:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        98:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        99:{
            lanci: 3,
            dado: 6,
            treasure: "g100",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "H"
            }]
        },
        100:{
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[ {
                lanci: 1,
                dado: 1,
                table: "H"
            }]
        }
    }
}

export const tab11_16 = {
    monete: {
        mo: {
            lanci: 4,
            dado: 6,
            quantity: 1000,
            standard: 14000
        },
        mp: {
            lanci: 5,
            dado: 6,
            quantity: 100,
            standard: 1750
        }
    },
    other:{
        3:null,
        6: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
        },
        9: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
        },
        12: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
        },
        15: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
        },
        19: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[
                {
                    lanci: 1,
                    dado: 4,
                    table: "A"
                },
                {
                    lanci: 1,
                    dado: 6,
                    table: "B"
                }
            ]
        },
        23: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[
                {
                    lanci: 1,
                    dado: 4,
                    table: "A"
                },
                {
                    lanci: 1,
                    dado: 6,
                    table: "B"
                }
            ]
        },
        26: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[
                {
                    lanci: 1,
                    dado: 4,
                    table: "A"
                },
                {
                    lanci: 1,
                    dado: 6,
                    table: "B"
                }
            ]
        },
        29: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[
                {
                    lanci: 1,
                    dado: 4,
                    table: "A"
                },
                {
                    lanci: 1,
                    dado: 6,
                    table: "B"
                }
            ]
        },
        35: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "C"
            }]
        },
        40: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "C"
            }]
        },
        45: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "C"
            }]
        },
        50: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "C"
            }]
        },
        54: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "D"
            }]
        },
        58: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "D"
            }]
        },
        62: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "D"
            }]
        },
        66: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "D"
            }]
        },
        68: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "E"
            }]
        },
        70: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "E"
            }]
        },
        72: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "E"
            }]
        },
        74: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "E"
            }]
        },
        76: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[
                {
                    lanci: 1,
                    dado: 1,
                    table: "F"
                },
                {
                    lanci: 1,
                    dado: 4,
                    table: "G"
                }
            ]
        },
        78: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[
                {
                    lanci: 1,
                    dado: 1,
                    table: "F"
                },
                {
                    lanci: 1,
                    dado: 4,
                    table: "G"
                }
            ]
        },
        80: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[
                {
                    lanci: 1,
                    dado: 1,
                    table: "F"
                },
                {
                    lanci: 1,
                    dado: 4,
                    table: "G"
                }
            ]
        },
        82: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[
                {
                    lanci: 1,
                    dado: 1,
                    table: "F"
                },
                {
                    lanci: 1,
                    dado: 4,
                    table: "G"
                }
            ]
        },
        85: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "H"
            }]
        },
        88: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        90: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        92: {
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        94: {
            lanci: 2,
            dado: 4,
            treasure: "o250",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "I"
            }]
        },
        96: {
            lanci: 2,
            dado: 4,
            treasure: "o750",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "I"
            }]
        },
        98: {
            lanci: 3,
            dado: 6,
            treasure: "g500",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "I"
            }]
        },
        100:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 1,
                table: "I"
            }]
        }

    }
}


export const tab17 = {
    monete: {
        mo: {
            lanci: 12,
            dado: 6,
            quantity: 1000,
            standard: 42000
        },
        mp: {
            lanci: 8,
            dado: 6,
            quantity: 1000,
            standard: 28000
        }
    },
    other:{
        2:null,
        5:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 8,
                table: "C"
            }]
        },
        8:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 8,
                table: "C"
            }]
        },
        11:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 8,
                table: "C"
            }]
        },
        14:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 8,
                table: "C"
            }]
        },
        22:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "D"
            }]
        },
        30:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "D"
            }]
        },
        38:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "D"
            }]
        },
        46:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "D"
            }]
        },
        52:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "E"
            }]
        },
        58:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "E"
            }]
        },
        63:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "E"
            }]
        },
        68:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 6,
                table: "E"
            }]
        },
        69:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        70:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        71:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        72:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "G"
            }]
        },
        74:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        76:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        78:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        80:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "H"
            }]
        },
        85:{
            lanci: 3,
            dado: 6,
            treasure: "g1000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "I"
            }]
        },
        90:{
            lanci: 1,
            dado: 10,
            treasure: "o2500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "I"
            }]
        },
        95:{
            lanci: 1,
            dado: 4,
            treasure: "g5000",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "I"
            }]
        },
        100:{
            lanci: 1,
            dado: 8,
            treasure:"o7500",
            magic:[{
                lanci: 1,
                dado: 4,
                table: "I"
            }]
        }
    }
}

export const A = {
    50 : "Pozione di guarigione",
    60: "Pergamena magica (trucchetto)", 
    70: "Pozione di scalare", 
    90: "Pergamena magica (7* livello)", 
    94: "Pergamena magica (2' livello)", 
    98: "Pozione di guarigione maggiore", 
    99: "Borsa conservante", 
    100: "Globo fluttuante", 
}

export const B = {
    15:"Pozione di guarigione maggiore",
    22:"Pozione del soffio di fuoco",
    29:"Pozione di resistenza",
    34:"Munizione +1",
    39:"Pozione di amicizia con gli animali",
    44:"Pozione della forza dei giganti delle colline",
    49:"Pozione di crescita",
    54:"Pozione del respirare sott'acqua",
    59:"Pergamena magica (2' livello)",
    64:"Pergamena magica (3' livello)",
    67:"Borsa conservante",
    70:"Unguento di Keoghtom",
    73:"Olio della scivolosita",
    75:"Polvere della sparizione",
    77:"Polvere dello starnuto e del soffocamento",
    79:"Polvere prosciugante",
    81:"Gemma elementale",
    83:"Filtro d'amore",
    84:"Anello del nuotare",
    85:"Armatura del marinaio",
    86:"Armatura in mithral",
    87:"Bacchetta dei segreti",
    88:"Bacchetta di individuazione dei magico",
    89:"Copricapo del respirare sott'acqua",
    90:"Corda per scalare",
    91:"Elmo della comprensione dei linguaggi",
    92:"Giara alchemica",
    93:"Globo fluttuante",
    94:"Lanterna della rivelazione",
    95:"Mantello della manta",
    96:"Occhiali delta notte",
    97:"Pozione velenosa",
    98:"Sella del cavaliere",
    99:"Tunica degli oggetti utili",
    100:"Verga inamovibile",
}

export const C = {
    15:"Pozione di guarigione superiore",
    22:"Pergamena magica (4' livello)",
    27:"Munizione +2",
    32:"Pozione di chiaroveggenza",
    37:"Pozione di diminuzione",
    42:"Pozione della forma gassosa",
    47:"Pozione della forza dei giganti del gelo",
    52:"Pozione della forza dei giganti delle pietre",
    57:"Pozione di eroismo",
    62:"Pozione di invulnerability",
    67:"Pozione di lettura della mente",
    72:"Pergamena magica livello)",
    75:"Elisir della salute",
    78:"Olio della forma eterea",
    81:"Pozione della forza dei giganti del fuoco",
    84:"Piume di Quaal",
    87:"Pergamena di protezione",
    89:"Borsa dei fagioli magici",
    91:"Biglia di form",
    92:"Barca pieghevole",
    93:"Campana dell'apertura",
    94:"Caraffa dell'acqua eterna",
    95:"Collana delle palle di fuoco",
    96:"Ferri della velocity",
    97:"Lenti della visione dettagliata",
    98:"Pietre parlanti",
    99:"Talismano della salute",
    100:"Zainetto pratico di Heward",
}

export const D = {
    20:"Pozione di guarigione suprema",
    30:"Pozione di invisibility",
    40:"Pozione di velocity",
    50:"Pergamena magica (6' livello)",
    57:"Pergamena magica (7' livello)",
    62:"Munizione +3",
    67:"Olio dell'affilatura",
    72:"Pozione di volare",
    77:"Pozione della forza dei giganti delle nuvole",
    82:"Pozione di longevity",
    87:"Pozione di vitality",
    92:"Pergamena magica (8' livello)",
    95:"Ferri dello zefiro",
    98:"Pigment meravigliosi di Nolzur",
    99:"Borsa divorante",
    100:"Buco portatile",
}

export const E = {
    30 :"Pergamena magica (8' livello)",
    55 :"Pozione della forza dei giganti delle tempeste",
    70 :"Pozione di guarigione suprem?",
    85 :"Pergamena magica (9° livello)",
    93 :"Solvente universale",
    98 :"Freccia assassina",
    100 :"Calla meravigliosa",
}

export const F = {
    15	:"Arma +1",
    18	:"Scudo +1",
    21	:"Scudo sentinella",
    23	:"Amuleto anti-individuazione e localizzazione",
    25	:"Arma dell'avvertimento",
    27	:"Bacchetta dei dardi incantati",
    29	:"Bacchetta del mago da guerra +1",
    31	:"Bacchetta della ragnatela",
    33	:"Bastone del pitone",
    35	:"Bastone della vipera",
    37	:"Bracc:ali dell'arciere",
    39	:"Cappello del camuffamento",
    41	:"Fermaglio dello scudo",
    43	:"Giavellotto del fulmine",
    45	:"Guanti del potere orchesco",
    47	:"Mantello della protezione",
    49	:"Mantello elfico",
    51	:"Pantofole del ragno",
    53	:"Perla del potere",
    55	:"Scapa volante",
    57	:"Spada della vendetta",
    59	:"Stivali elfici",
    61	:"Stivali molleggiati",
    63	:"Tridente del comando dei peso",
    65	:"Verga del patto rispettato +1",
    66	:"Anello del calore",
    67	:"Anello del camminare sull'acqua",
    68	:"Anello del saltare",
    69	:"Anello di scudo mentale",
    70	:"Armatura adamantina (corazza di scaglie)",
    71	:"Armatura adamantina (cotta di maglia)",
    72	:"Armatura adamantina (giaco di magia)",
    73	:"Borsa dei trucchi (grigia)",
    74	:"Borsa dei trucchi (marrone)",
    75	:"Borsa dei trucchi (ruggine)",
    76	:"Bottiglia del fumo perenne",
    77	:"Collana dell'adattamento",
    78	:"Diadema incandescente",
    79	:"Elmo della telepatia",
    80	:"Faretra di Ehlonna",
    81	:"Fascia dell'intelletto",
    82	:"Flauto dei topi",
    83	:"Flauto incantatore",
    84	:"Gemma della luminosity",
    85	:"Guanti catturaproiettili",
    86	:"Guanti del nuotare e scalare",
    87	:"Guanti ladreschi",
    88	:"Lenti dell'aquila",
    89	:"Lenti dello charme",
    90	:"Mazzo delle illusioni",
    91	:"Medaglione dei pensieri",
    92	:"Pietra della buona fortuna",
    93	:"Statuina del potere meraviglioso (corvo d'argento)",
    94	:"Stivali alati",
    95	:"Stivali deli'inverno",
    96	:"Strumento dei bardi (bandura di Fochlucan)",
    97	:"Strurrrento dei bardi (cetera di Mac•Fuimidh)",
    98	:"Strumento dei bardi (liuto di Doss)",
    99	:"Talismano della rimarginazione",
    100	:"Ventaglio",
}

export const G = {
    11: "Arma +2",
    14: "Statuina del potere meraviglioso (si tira un d8)",
    2: "Cane d'onice",
    3: "Capre d'avorio",
    4: "Elefante di marmo",
    5: "Grifone di bronzo",
    6: "Gufo di serpentino",
    7: "Leoni d'ora",
    8: "Mosca d'ebano",
    15: "Ali del volo",
    16: "Ammazzadraghi",
    17: "Ammazzagiganti",
    18: "Amuleto della salute",
    19: "Anello accumula incantesimi",
    20: "Anello dell'ariete",
    21: "Anello della caduta morbida",
    22: "Anello della liberta di azione",
    23: "Anello della vista a raggi X",
    24: "Anello di eludere",
    25: "Anello di influenza sugli animali",
    26: "Anello di protezione",
    27: "Anello di resistenza",
    28: "Arma spietata",
    29: "Armatura adamantina (corazza a strisce)",
    30: "Armatura adamantina (corazza di piastre)",
    31: "Armatura, cotta di maglia +1",
    32: "Armatura della resistenza (cotta di maglia)",
    33: "Armatura, giaco di maglia +1",
    34: "Armatura della resistenza (giaco di maglia)",
    35: "Armatura della vulnerability",
    36: "Armatura di cuoio borchiato incantata",
    37: "Ascia del berserker",
    38: "Bacchetta del fulmini",
    39: "Bacchetta del legame",
    40: "Bacchetta del mago da guerra +2",
    41: "Bacchetta della paralisi",
    42: "Bacchetta della paura",
    43: "Bacchetta delle meraviglie",
    44: "Bacchetta delle pane di fuoco",
    45: "Bacchetta di individuazione dei nemici",
    46: "Bastone dei boschi",
    47: "Bastone del deperimento",
    48: "Bastone della guarigione",
    49: "Bastone dello charme",
    50: "Bastone dello seiame di insetti",
    51: "Boccia del comando degli elementali dell'acqua",
    52: "Bracciali della difesa",
    53: "Braciere del comando degli elementali del fuoco",
    54: "Cappa del saltimbanco ",
    55: "Cintura della forza dei gigantr delle colline",
    56: "Cintura nanica",
    57: "Armatura, cuoio +1",
    58: "Armatura della resistenza (cuoio)",
    59: "Collana del rosario",
    60: "Corda intralciante",
    61: "Corno del Va:halla (argento a ottone)",
    62: "Corno della distruzione",
    63: "Cubo di forza",
    64: "Elmo del teletrasporto",
    65: "Fasce metalliche di Bilarro",
    66: "Fortezza istantanea di Daern",
    67: "Gemma della visione",
    68: "Giaco di maglia elfico",
    69: "Incensiere del controllo degli elementali dell'aria",
    70: "Lama del sale",
    71: "Lingua di fiamme",
    72: "Manette dimensionali",
    73: "Mantello del pipistrello",
    74: "Mantello distorcente",
    75: "Manto della resistenza agli incantesimi",
    76: "Armatura, corazza di scaglie",
    77: "Armatura della resistenza (corazza di scaglie)",
    78: "Mazza del terrore",
    79: "Mazza della distruzione",
    80: "Mazza della punizione",
    81: "Pietra del controllo degli elementali della terra",
    82: "Pietra di loun (consapevolezza)",
    83: "Pietra di loun (protezione)",
    84: "Pietra di loun (riserva)",
    85: "Pietra di loun (sostentamento)",
    86: "Pugnale avvelenato",
    87: "Scudo +2",
    88: "Scudo attiraproiettili",
    89: "Scudo catturafrecce",
    90: "Spada del ferimento",
    91: "Spada del furto vitale",
    92: "Stivali della levitazione",
    93: "Stivali della velocity",
    94: "Strumento dei bardi (lira di Cli)",
    95: "Strumento dei bardi (mandolin° di Canaith)",
    96: "Talisman° anti-veleno",
    97: "Tunica degli occhi",
    98: "Verga dei tentacoli",
    99: "Verga del patto rispettato +2",
    100: "Verga della sovranita",
   
}

export const H = {
    10:	"Arma +3",
    12:	"Amuleto dei piani",
    14:	"Anello delle stelle cadenti",
    16:	"Anello di rgenerazione",
    18:	"Anello di telecinesi",
    20:	"Bacchetta del mago da guerra +3",
    22:	"Bacchetta della metamorfosi",
    24:	"Bastone dei tuoni e fulmini",
    26:	"Bastone del colpo possente",
    28:	"Bastone del fuoco",
    30:	"Bastone del gelo",
    32:	"Bastone del potere",
    34:	"Scimitarra della velocity",
    36:	"Scudo +3",
    38:	"Sfera di cristallo (versione motto rara)",
    40:	"Spada affilata",
    42:	"Tappeto voiante",
    44:	"Tunica dei colori scintillanti",
    46:	"Tunica delle stelle",
    48:	"Verga del patto, rispettato +3",
    50:	"Verga dell'allerta",
    52:	"Verga dell'assorbimento",
    54:	"Verga della sicurezza",
    55:	"Arco del giuramento",
    56:	"Armatura adamantina (armatura completa)",
    57:	"Armatura adamantina (mezza armatura)",
    58:	"Armatura completa nanica",
    59:	"Armatura demoniaca",
    60:	"Armatura, corazza di piastre +1",
    61:	"Armatura della resistenza (corazza di piastre)",
    62:	"Bottiglia dell'efreeti",
    63:	"Armatura, cotta di maglia +2",
    64:	"Armatura, giaco di maglia +2",
    65:	"Candela dell'invocazione",
    66:	"Cintura della forza dei giganti del fuoco",
    67:	"Cintura della forza dei giganti del gelo (o delle p'etre)",
    68:	"Corazza di scaglie di drago",
    69:	"Corno del Valhalla (bronzo)",
    70:	"Elmo della luminosity",
    71:	"Mantello delParacnide",
    72:	"Manuale dei golem",
    73:	"Manuale delPesercizio fisico",
    74:	"Manuale della salute",
    75:	"Manuale della velocity di azione",
    76:	"Martello nanico da lancio",
    77:	"Pietra di loun (agilita)",
    78:	"Pietra di loun (assorbimento)",
    79:	"Pietra di loun (autorita)",
    80:	"Pietra di loun (forza)",
    81:	"Pietra di loun (intelletto)",
    82:	"Pietra di loun (intuizione)",
    83:	"Pietra di loun (tempra)",
    84:	"Armatura, cuoio +2",
    85:	"Scudo animato",
    86:	"Scudo anti-incantesimi",
    87:	"Spada danzante",
    88:	"Spada ruba nove vite",
    89:	"Spadone del gelo",
    90:	"Specchio imprigionante",
    91:	"Statuina del potere meraviglioso (stallone d'ossidiana)",
    92:	"Armatura, corazza di scaglie +2",
    93:	"Strumento dei bardi (arpa di Anstruth)",
    94:	"Armatura, corazza a strisce +1",
    95:	"Armatura della resistenza (corazza a strisce)",
    96:	"Armatura, cuoio borchiato +1",
    97:	"Armatura della resistenza (cuoio borchiato)",
    98:	"Tomo dei comando e dell'influenza",
    99:	"Tomo del nitido pensiero",
    100:"Tomo della comprensione",
    
}

export const I = {
    5: "Difensiva",
    10: "Lama della fortuna",
    15: "Martello dei fulmini",
    20: "Spada delle risposte",
    23: "Anello di evocazione del d'inni",
    26: "Anello di invisibilità",
    29: "Anello rifletti incantesimo",
    32: "Bastone dei magi",
    35: "Sacro vendicatore",
    38: "Spada vorpal",
    41: "Verga della potenza divina",
    43: "Ampolla di ferro",
    45: "Armatura, corazza di piastre +2",
    47: "Armatura, cotta di maglia +3",
    49: "Armatura, giaco di maglia +3",
    51: "Cintura della forza dei giganti delle nuvole",
    53: "Mantello dell'invisibilità",
    55: "Armatura, mezza armatura +1",
    57: "Pozzo dei mondi",
    59: "Armatura, cuoio +3",
    61: "Armatura, armatura completa +1",
    63: "Scarabeo di protezione",
    65: "Sfera di cristallo (versione leggendaria)",
    67: "Armatura, corazza di scaglie +1",
    69: "Tunica dell'arcimago",
    71: "Armatura, corazza a strisce +2",
    73: "Armatura, cuoio borchiato +2",
    75: "Verga della resurrezione",
    76: "Armatura magica (si tira un d12: armatura, mezza armatura +2, 3-4 armatura, armatura completa +2, 5-6 armatura, cuoio borchiato +3, 7-8 armatura, corazza di piastre +3, 9-10 armatura, corazza a strisce +3, 11 armatura, mezza armatura +3, 12 armatura, armatura completa +3) ",
    77: "Anello dei tre desideri ",
    78: "Anelo del comando degli elementali del fuoco",
    79: "Anello del comando degli elementali dell'acqua",
    80: "Anello del comando degli elementali dell'aria",
    81: "Anello del comando degli elementali della terra",
    82: "Apparato di Kwalish",
    83: "Armatura della resistenza (mezza armatura)",
    84: "Armatura completa della forma eterea",
    85: "Armatura completa della resistenza",
    86: "Armatura dell'invulnerabilità",
    87: "Cintura della forza dei giganti delle tempeste",
    88: "Corno del Valhalla (ferro)",
    89: "Cotta di maglia dell'efreeti",
    90: "Cubo dei portali",
    91: "Mazzo delle meraviglie",
    92: "Pietra di loun (assorbimento superiore)",
    93: "Pietra di loun (maestria)",
    94: "Pietra di loun (rigenerazione)",
    95: "Sfera annientatrice",
    96: "Strumento dei bardi (arpa di 011amh)",
    97: "Talismano del bene puro",
    98: "Talismano del male estremo",
    99: "Talismano della sfera",
    100: "Tomo della lingua essiccati",
}