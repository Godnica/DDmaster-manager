import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators} from '@angular/forms';
import { difficulty } from '../../models/incontri.model';
import { FiredbService } from '../../services/firedb.service';
import { tebleExpXMonster } from '../../models/incontri.model';
import { DifficultyCalculator } from '../../models/incontri.model';
import { Pg } from '../../models/pg.model';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss'],
})
export class FightComponent implements OnInit {
  

  totExp: number = 0;
  typeOfIncontro: string = ""

  expMonster = tebleExpXMonster
  group?: {
    number: number,
    level: number
  }

  encounter : {
    number:number,
    experience: number
  } = {
    number: 0,
    experience: 0
  }

  @Input() idAdv:string;
  monsters= [];

  constructor(
    private fireDb: FiredbService,
    private modal: ModalController,
    private fb: FormBuilder
  ) { }

  public fightForm = this.fb.group({
      id_adv: [''],
      total_exp: [''],
      monster: [''],
      title: [''],
      description: ['']
  });

  async ngOnInit() {
    console.log(this.idAdv);
    this.fightForm.get('id_adv').setValue(this.idAdv);
    console.log("---_>", difficulty);
    if(!this.group){
      await this.fireDb.collection('pg').then(el=>{
        const result = Object.values(el.val()).filter((el:Pg)=>el.id_adv ==this.idAdv);

        const nPg = result.length;
        const level = Math.floor(
          result.map((el:Pg)=>el.level).reduce((a,b)=>a+b)/nPg
        )

        this.group = {
          number : nPg,
          level: level
        }

      })
    
    }
   
  }

  addMonster(event:Event){

    console.log("Addo il mostro");

    let actual = this.fightForm.get("monster").value;
    console.log(actual)
    if(!actual){
      console.log("assegno array vuoto")
      actual = []
    }
    
      console.log("pusho", event)
      actual.push(event);
      this.fightForm.get("monster").setValue(actual);

      const m = event as any


    

    this.monsters = this.fightForm.get("monster").value;

    this.encounter.number+=1;
    console.log("èèèè", this.expMonster.find(el=>el.level==m.gs), this.expMonster, m.gs)
    this.encounter.experience+= this.expMonster.find(el=>el.level==m.gs).exp;

    console.log(this.encounter);

    const encounterReult = DifficultyCalculator(this.group,this.encounter);

    this.totExp = encounterReult.totExp;
    this.typeOfIncontro = encounterReult.difficulty;

  }

  deleteMonster(monster, index){
    console.log(monster, index);
    this.monsters.splice(index, 1);
    this.encounter.number-=1;
    this.encounter.experience-= this.expMonster.find(el=>el.level== +monster.gs).exp;
    console.log(this.encounter);
  }


  addAnother(monster){
    this.monsters.push(monster);
    this.encounter.number+=1
    this.encounter.experience+= this.expMonster.find(el=>el.level==monster.gs).exp;
    console.log(this.encounter)
  }

  dismissModal(){
    this.modal.dismiss();
  }

  insertFight(){
    console.log(this.fightForm.value);

    this.fightForm.get('total_exp').setValue(this.totExp);

    this.fireDb.add("fights",this.fightForm.value).then(()=>
      this.modal.dismiss()
    )
    // this.fireDb.add()
  }
}
