import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Skill, utility } from 'src/app/core/models/skill.model';
import { FormBuilder } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PophoverDifficultyComponent } from '../../subcomponent/pophover-difficulty/pophover-difficulty.component';
import { PophoverBadgesComponent } from '../../subcomponent/pophover-badges/pophover-badges.component';
import { ControllerService } from 'src/app/core/services/controller.service';
import { Badges } from 'src/app/core/models/badges.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class FormSkillComponent implements OnInit {
  @Input() title:string
  @Input() idAdv:string
  ready: boolean = false;
  active: boolean = true;
  repetible: boolean = true;
  skillsModels= utility.skills;
  totalBadge:Array<Badges> = [];

  private subs= new Subscription()

  private popbadge = {
    success: [],
    fail:[],
    critical_fail: [],
    critical_success: [],
  }

  public formSkill = this.fb.group({
    title: [''],
    description: [''],
    id: [''],
    id_adv: [''],
    cd: [''],
    type:[''],
    active: [''],
    success: [''],
    critical_success: [''],
    fail: [''],
    critical_fail: [''],
    badges_need: [''],
    ripetible: [''],
  })

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
    private controller: ControllerService,    
  ) { }
  

  ngOnInit() {
    this.formSkill.get('id_adv').setValue(this.idAdv);
  }

  dimiss(){
    this.modalCtrl.dismiss()
  }


  ionViewDidEnter(){    
    this.ready = true;
      const select:any = document.querySelector('.interfaceOptions');
      select.interfaceOptions = {
      cssClass: 'skills-interface'
    };
  }

  async setDifficultyPop(){
    const pop = await this.popoverCtrl.create({
      component: PophoverDifficultyComponent
    })

    await pop.present()

    pop.onDidDismiss().then(res => {
      console.log(res.data)
      this.formSkill.get('cd').setValue(res.data[1]);
    })
  }

  async showPopBadge(path: string){
    console.log(path);
    const _badges = this.popbadge[path];

    this.subs.add(this.controller.BadgesArr.subscribe(async (badges)=>{
      this.totalBadge = badges;
      let badgeButton = [];
      badges.forEach(el=>{
        if(!_badges.find(b=>b.id===el.id)){
          badgeButton.push(el)
        }
      })

      const pop = await this.popoverCtrl.create({
        component: PophoverBadgesComponent,
        componentProps: {
          badges: badgeButton
        }
      })
  
      await pop.present()
  
      await pop.onDidDismiss().then(res => {
        if(res.data) this.popbadge[path] = res.data;
        this.popoverCtrl.getTop().then(v => v ? this.popoverCtrl.dismiss() : null);
      })

    }))
  }

  removeChip(chip: Badges, path: string){
    this.popbadge[path] = this.popbadge[path].filter(b=>b.id!==chip.id);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.popoverCtrl.getTop().then(v => v ? this.popoverCtrl.dismiss() : null);
  }  

  outputFromRedeemer(event: Badges[], path: string){
    console.log("io mario pio", event);
    this.popbadge[path] = event;
  }

}
