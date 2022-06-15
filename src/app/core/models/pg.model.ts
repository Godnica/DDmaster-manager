export interface Pg{
    id:string;
    id_adv:string;
    name:string;
    giocatore:string;
    conditions: Array<Condiction>,
    exp: number;
    level: number;
}



export const Condictions = [
    {
        id: 1,
        name: 'Accettato',
        description: "<ul>\r\n    <li>\r\n        Una creatura accecata non può vedere e fallisce automaticamente qualsiasi prova di caratteristica che richieda l'uso della vista.\r\n    </li>\r\n    <li>\r\n        I tiri per colpire contro la creatura hanno vantaggio, mentre i tiri per colpire della creatura subiscono svantaggio.\r\n    </li>\r\n</ul>",
        ico: "eye-off"
    },
    {
        id: 2,
        name: "Affascinato",
        description: "<ul>\r\n    <li>\r\n        Una creatura affascinata non può attaccare o bersagliare chi l’ha affascinata con capacità speciali o effetti magici dannosi.\r\n    </li>\r\n    <li>\r\n        Colui che ha affascinato la creatura dispone di vantaggio a qualsiasi prova di caratteristica effettuata per interagire socialmente con essa.\r\n    </li>\r\n</ul>",
        ico: "heart"
    },
    {
        id: 3,
        name: "Afferrato",
        description: "<ul>\r\n    <li>\r\n        La velocità di una creatura afferrata diventa 0,e non può beneficiare da alcun bonus alla sua velocità.\r\n    </li>\r\n    <li>\r\n        La condizione termina se colui che ha iniziato l’attacco di lottare è Incapacitato (vedi quella condizione).\r\n    </li>\r\n    <li>\r\n        La condizione termina anche se un effetto allontana la creatura afferrata dalla portata di colui che ha iniziato l’attacco o l’effetto afferrante, come quando una creatura viene scagliata via dall'incantesimo Onda Tonante.\r\n    </li>\r\n</ul>",
        ico: "lock-open"
    }
]




export interface Condiction{
    id: number,
    name: string,
    desciption: string
    // "Accecato" = "<ul>\r\n    <li>\r\n        Una creatura accecata non può vedere e fallisce automaticamente qualsiasi prova di caratteristica che richieda l'uso della vista.\r\n    </li>\r\n    <li>\r\n        I tiri per colpire contro la creatura hanno vantaggio, mentre i tiri per colpire della creatura subiscono svantaggio.\r\n    </li>\r\n</ul>",
    // "Affascinato" = "<ul>\r\n    <li>\r\n        Una creatura affascinata non può attaccare o bersagliare chi l’ha affascinata con capacità speciali o effetti magici dannosi.\r\n    </li>\r\n    <li>\r\n        Colui che ha affascinato la creatura dispone di vantaggio a qualsiasi prova di caratteristica effettuata per interagire socialmente con essa.\r\n    </li>\r\n</ul>",
    // "Afferrato"  ="<ul>\r\n    <li>\r\n        La velocità di una creatura afferrata diventa 0,e non può beneficiare da alcun bonus alla sua velocità.\r\n    </li>\r\n    <li>\r\n        La condizione termina se colui che ha iniziato l’attacco di lottare è Incapacitato (vedi quella condizione).\r\n    </li>\r\n    <li>\r\n        La condizione termina anche se un effetto allontana la creatura afferrata dalla portata di colui che ha iniziato l’attacco o l’effetto afferrante, come quando una creatura viene scagliata via dall'incantesimo Onda Tonante.\r\n    </li>\r\n</ul>",
    // "Assordato",
    // "Avvelenato",
    // "Incapacitato",
    // "Invisibile",
    // "Parazlizzato",
    // "Pietrificato",
    // "Privo di sensi",
    // "Prono",
    // "Spaventato",
    // "Stordito",
    // "Trattenuto",
    // "Indebolito 1",
    // "Indebolito 2",
    // "Indebolito 3",
    // "Indebolito 4",
    // "Indebolito 5",
    // "Indebolito 6",
}

export enum CondictionType{
    // "Accecato" = Condiction.Accecato,
}

export enum CondictionIco{
    "Accecato" = "eye-off",
}


export const lev_exp = [
    {"1" : 0},
    {"2": 300}, 
    {"3":900},
    {"4":2700},
    {"5":6500},
    {"6":14000},
    {"7":23000},
    {"8":34000},
    {"9":48000},
    {"10":64000},
    {"11":85000},
    {"12":100000},
    {"13":120000},
    {"14":140000},
    {"15":165000},
    {"16":195000},
    {"17":225000},
    {"18":265000},
    {"19":305000},
    {"20":355000}
]
