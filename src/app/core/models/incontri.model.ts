export enum difficulty {
    facile ="success",
    medio = "ternary",
    difficile = "warning",
    letale = "danger"
}


export const tebleExpXMonster = [
    {level: 0.125,label: "1/8", exp: 25},
    {level: 0.25, label: "1/4", exp: 50},
    {level: 0.50, label: "1/2", exp: 100},
    {level: 1	, label: 1	, exp: 200},
    {level: 2	, label: 2	, exp: 450},
    {level: 3	, label: 3	, exp: 700},
    {level: 4	, label: 4	, exp: 1100},
    {level: 5	, label: 5	, exp: 1800},
    {level: 6	, label: 6	, exp: 2300},
    {level: 7	, label: 7	, exp: 2900},
    {level: 8	, label: 8	, exp: 3900},
    {level: 9	, label: 9	, exp: 5000},
    {level: 10	, label: 10	, exp: 5900},
    {level: 11	, label: 11	, exp: 7200},
    {level: 12	, label: 12	, exp: 8400},
    {level: 13	, label: 13	, exp: 10000},
    {level: 14	, label: 14	, exp: 11500},
    {level: 15	, label: 15	, exp: 13000},
    {level: 16	, label: 16	, exp: 15000},
    {level: 17	, label: 17	, exp: 18000},
    {level: 18	, label: 18	, exp: 20000},
    {level: 19	, label: 19	, exp: 22000},
    {level: 20	, label: 20	, exp: 25000},
    {level: 21	, label: 21	, exp: 33000},
    {level: 22	, label: 22	, exp: 41000},
    {level: 23	, label: 23	, exp: 50000},
    {level: 24	, label: 24	, exp: 62000},
    {level: 25	, label: 25	, exp: 75000},
    {level: 26	, label: 26	, exp: 90000},
    {level: 27	, label: 27	, exp: 105000},
    {level: 28	, label: 28	, exp: 120000},
    {level: 29	, label: 29	, exp: 135000},
    {level: 30	, label: 30	, exp: 155000}
]


export function DifficultyCalculator(group, encountr){
    console.log("group",group, "incontro",encountr);
    const factor = [1,1.5,2,2.5,3,4];

    if(encountr.number == 1){
        encountr.factor = 1
    }else if(encountr.number == 2){
        encountr.factor =1.5
    }else if(encountr.number <= 6){
        encountr.factor =2
    }else if(encountr.number <= 10){
        encountr.factor =2.5
    }else if(encountr.number <= 14){
        encountr.factor = 3
    }else {
        encountr.factor = 4
    }

    if(group.number >6){
        const index = factor.findIndex(encountr.factor) - 1;
        if(encountr.number>1){
            encountr.factor = factor[index]
        }
    }

    if(group.number < 3){
        const index = factor.findIndex(encountr.factor) + 1;
        if(factor[index]){
            encountr.factor = factor[index]
        }
    }

    const totExp = (encountr.experience * encountr.factor);
    const totExpForMember = totExp/group.number;

    console.log(totExp,"per singolo---->",  totExpForMember, encountr);

    console.log("livello", group.level, tablePeXPg[group.level-1])

    const finded =  Object.keys(tablePeXPg[group.level-1]).reverse().find(el=>tablePeXPg[group.level-1][el]<=totExpForMember)|| "letale";
    return {
     difficulty: finded,
     totExp: totExp
    }

}

export const tablePeXPg = [
    {
        facile: 25,
        medio: 50,
        difficile: 75,
        letale: 100
    },
    {
        facile: 50,
        medio: 100,
        difficile: 150,
        letale: 200
    },
    {
        facile:  75,
        medio: 150,
        difficile: 225,
        letale: 400
    },
    {
        facile: 125,
        medio: 250,
        difficile: 375,
        letale: 400
    },
    {
        facile: 250,
        medio: 500,
        difficile: 750,
        letale: 1100
    },
    {
        facile: 300,
        medio: 600,
        difficile: 900,
        letale: 1400
    },
    {
        facile: 350,
        medio: 750,
        difficile: 1100,
        letale: 1700
    },
    {
        facile: 450,
        medio: 900,
        difficile: 1400,
        letale: 2100
    },
    {
        facile: 550,
        medio: 1100,
        difficile: 1600,
        letale: 2400
    },
    {
        facile: 600,
        medio: 1200,
        difficile: 1900,
        letale: 2800
    },
    {
        facile: 800,
        medio: 1600,
        difficile: 2400,
        letale: 3600
    },
    {
        facile: 1000,
        medio: 2000,
        difficile: 3000,
        letale: 4500
    },
    {
        facile: 1100,
        medio: 2200,
        difficile: 3400,
        letale: 5100
    },
    {
        facile: 1250,
        medio: 2500,
        difficile: 3800,
        letale: 5700
    },
    {
        facile: 1400,
        medio: 2800,
        difficile: 4300,
        letale: 6400
    },
    {
        facile: 1600,
        medio: 3200,
        difficile: 4800,
        letale: 7200
    },
    {
        facile: 2000,
        medio: 3900,
        difficile: 5900,
        letale: 8800
    },
    {
        facile: 2100,
        medio: 4200,
        difficile: 6300,
        letale: 9500
    },
    {
        facile: 2400,
        medio: 4900,
        difficile: 7300,
        letale: 10900
    },
    {
        facile: 2800,
        medio: 5700,
        difficile: 8500,
        letale: 12700
    },
]