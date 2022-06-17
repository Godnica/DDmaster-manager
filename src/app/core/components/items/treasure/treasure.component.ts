import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { magicTable, otherLoot, Treasure } from 'src/app/core/models/treasure.model';
import { tabs } from 'src/app/core/models/treasure.model';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss'],
})
export class TreasureComponent implements OnInit {
  @Input() idAdv: string;
  @Input() items = [];
  public assigner ={
    monete: {
      mr: 0,
      ma: 0,
      mo: 0,
      mp: 0
    },
    other: [],
    magic: [],
  }

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.items);
    if(!this.items) this.items = []
  }


  ngOnChanges(changes: SimpleChange){
    console.log("cambio?")
  }

  generateLoot(){
    let cont = 0;
    this.items = [];

    for(let i = 0; i<7; i++){
      cont=++cont;
      this.genCumulo('tab0_4', "0-4", cont);
    };
    for(let i = 0; i<18; i++){
      cont=++cont;
      this.genCumulo('tab5_10', "5-10", cont);
    };
    for(let i = 0; i<12; i++){
      cont=++cont;
      this.genCumulo('tab11_16', '11-16', cont);
    };
    for(let i = 0; i<8; i++){
      cont=++cont;
      this.genCumulo('tab17', '17 +', cont);
    }

    console.log("let's finish");
    console.log(this.items);
    
  }

  genCumulo(tab: string, divider_title: string, contatore:number){    

    const monete = this.genMo(tabs[tab].monete);
    const _other = this.genOther(tabs[tab].other);
    
    if(_other){      
      const other = this.prittyer(_other);
      this.items.push({
        id: contatore,
        divider_title: divider_title,
        monete: monete,
        other: other
      })            
    }else{
      this.items.push({
        id: contatore,
        divider_title: divider_title,
        monete: monete
      })
    }
  }

  genMo(monete:any){
    let money = {}
    Object.keys(monete).forEach(m=>{
      money[m] = this.lanciDado(monete[m].lanci, monete[m].dado) * monete[m].quantity
    })    
    return money
  }

  lanciDado(lanci: number, dado:number){
    let num: number = 0
    for(let i =0; i< lanci ; i++){      
      num = num + Math.floor(Math.random() * dado) +1
    }
    return num
  }

  genOther(other:any){
    const result = Math.floor(Math.random() * 100) + 1;
    let finder = Object.keys(other).reverse().find(el=>Number(el)<=result);

    const ob = other[finder];
    if(ob){
      const gemme_arte = {
        quantity: this.lanciDado(ob.lanci, ob.dado),
        type: ob.treasure
      }
      
      if(ob.magic){
        const magic = this.genMagic(ob.magic);
        return {
          gemme_arte: gemme_arte,
          magic: magic
        };
      }else{
        return {gemme_arte: gemme_arte};
      }

    }
  }


  genMagic(magic: Array<any>){
    let arrMagic = [];
    magic.forEach(el=>{
      arrMagic.push({
        quantity: this.lanciDado(el.lanci,el.dado),
        table: el.table
      })
    })
    return arrMagic;
  }


  prittyer(other:{
    gemme_arte: any,
    magic?:Array<any>
  }){

    let result_magic = [];
    let result_gemme_arte = {
      value: otherLoot[other.gemme_arte.type].value,
      type: otherLoot[other.gemme_arte.type].type,
      data: []
    }

    for(let i = 0; i< other.gemme_arte.quantity; i++){
      const lancio = Math.floor(Math.random() * otherLoot[other.gemme_arte.type].data.length);
      const og = otherLoot[other.gemme_arte.type].data[lancio];
      result_gemme_arte.data.push(og);
    }

    if(other.magic){
      other.magic.forEach(magicBlock=>{
        const first_tot = magicBlock.quantity
        let magic = [];
        for(let i = 0 ; i<first_tot; i++){
          const lancio = Math.floor(Math.random() * 100)+1;
          const finder = Object.keys(magicTable[magicBlock.table]).reverse().find(el=>Number(el)<=lancio);
          if(finder) magic.push(magicTable[magicBlock.table][finder])        
        }
        
        result_magic = result_magic.concat(magic);

      })
    }

    return result_magic.length ? {magic: result_magic, other: result_gemme_arte} : {other: result_gemme_arte}

  }


  emitMoneyDrop(event: any){
    this.items.find(cum=>cum.id===event.id).monete[event.money_type] = this.items.find(cum=>cum.id===event.id).monete[event.money_type] - event.quantity;     
    this.assigner.monete[event.money_type] =  this.assigner.monete[event.money_type] ? this.assigner.monete[event.money_type] + event.quantity : event.quantity;
    console.log(this.assigner)
  }


  emitOgDrop(event:any){
    console.log("--->",event);
    this.items.find(cum=>cum.id===event.id).other.other.data =  this.items.find(cum=>cum.id===event.id).other.other.data.filter(og=>og!=event.og);
    this.assigner.other.push(event);
    console.log(this.assigner);
  }


  emitMagicDrop(event:any){
    this.items.find(cum=>cum.id===event.id).other.magic = this.items.find(cum=>cum.id===event.id).other.magic.filter(magic=>magic!=event.magic);
    this.assigner.magic.push(event);
  }


}

