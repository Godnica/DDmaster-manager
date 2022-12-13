import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill, utility } from '../../models/skill.model';
import { ModalController } from '@ionic/angular';
import { FormSkillComponent } from '../forms/skill/skill.component';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  @Input() path: string
  @Input() skills
  @Output() OutSkill =  new EventEmitter()
  public util?
  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
    console.log(this.skills);
    console.log("util>", utility.skills);
    this.util = utility.skills;
    this.skills.map(skill=>skill.class= this.util.find(el=>el.name===skill.type).car);
  }

  async editAbility(skill:Skill){
    const modal = await this.modal.create({
      component: FormSkillComponent,
      componentProps: {
        skill: skill,
        title: "Modifica Abilità",
        path: this.path
      }
    })

    await modal.present()

    modal.onDidDismiss().then(el=>{
      console.log("edit", el)
      this.OutSkill.emit(el);
    })
  }


  async newAdventure(){
    const modal = await this.modal.create({
      component: FormSkillComponent,
      componentProps: {
        title: "Crea una nuova abilità",
        path: this.path
      }
    })

    await modal.present()

    modal.onDidDismiss().then(async (el)=>{
      console.log("new", el)
      this.OutSkill.emit(el);
    })

  }

  deleteSkill(skill){
    this.OutSkill.emit(skill);
  }
  

}
