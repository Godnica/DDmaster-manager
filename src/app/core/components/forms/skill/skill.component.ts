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
import { FiredbService } from 'src/app/core/services/firedb.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class FormSkillComponent implements OnInit {
  @Input() title:string
  @Input() idAdv:string
  @Input() skill: Skill
  ready: boolean = false;
  active: boolean = true;
  repetible: boolean = true;
  skillsModels= utility.skills;
  totalBadge:Array<Badges> = [];

  

  private subs= new Subscription()

  public popbadge = {
    badge_success: [],
    badge_fail:[],
    badge_critical_fail: [],
    badge_critical_success: [],
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
    badge_success:[""],
    critical_success: [''],
    badge_critical_success:[""],
    fail: [''],
    badge_fail:[""],
    critical_fail: [''],
    badge_critical_fail:[""],
    badges_need: [''],
    ripetible: [''],
  })

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
    private controller: ControllerService,   
    private fire: FiredbService 
  ) { }
  

  ngOnInit() {

    if(this.idAdv){
      this.formSkill.get('id_adv').setValue(this.idAdv);
    }else{
      this.formSkill.get('id_adv').setValue(this.controller.idAdv);
    }


    if(this.skill){
      console.log(this.skill)
      this.formSkill.get("id").setValue(this.skill.id);
      this.formSkill.get("cd").setValue(this.skill.cd);
      this.formSkill.get("type").setValue(this.skill.type);
      this.formSkill.get("title").setValue(this.skill.title);
      this.formSkill.get("description").setValue(this.skill.description)
      this.active = this.skill.active;
      this.repetible = this.skill.ripetible;
      this.formSkill.get("success").setValue(this.skill.success);
      this.formSkill.get("critical_success").setValue(this.skill.critical_success);
      this.formSkill.get("fail").setValue(this.skill.fail);
      this.formSkill.get("critical_success").setValue(this.skill.critical_fail);

      Object.keys(this.popbadge).forEach(name=>{
        this.popbadge[name] = this.skill[name]||[]
      })

    }

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

    if(this.skill){
      console.log(select)
      select.selectedText  = this.skill.type
    }
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
    console.log(this.popbadge)
  }

  async crateSkill(){
    // this.formSkill.get('badges_need').setValue(this.popbadge);
    this.formSkill.get("badge_success").setValue(this.popbadge["badge_success"]);
    this.formSkill.get("badge_critical_success").setValue(this.popbadge["badge_critical_success"]);
    this.formSkill.get("badge_fail").setValue(this.popbadge["badge_fail"]);
    this.formSkill.get("badge_critical_fail").setValue(this.popbadge["badge_critical_fail"]);
    this.formSkill.get("type").setValue(this.formSkill.get("type").value.trim())

    console.log(this.formSkill.value);

    Object.keys(this.formSkill.value).forEach(propriety=>{
      if(!this.formSkill.value[propriety]){
        delete this.formSkill.value[propriety]
      }
    })

    console.log("pulito: ", this.formSkill.value)

    const role = this.skill ? "update": "new"
    this.modalCtrl.dismiss(this.formSkill.value, role);

    // this.skill ?
    //   await this.fire.update(`${this.path}/${this.skill.id}`, this.formSkill.value).then(()=>{
    //     location.reload()
    //   })
    //     :
    //   await this.fire.add("skills", this.formSkill.value).then(el=>{
    //     location.reload()
    //   });
    
  }

  changeSelect(event: Event){
    const e = event as CustomEvent;
    const select:any = document.querySelector('.interfaceOptions');
    select.selectedText = e.detail.value;
  }

}
