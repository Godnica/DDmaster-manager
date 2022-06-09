import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Skill, utility } from 'src/app/core/models/skill.model';
import { FormBuilder } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PophoverDifficultyComponent } from '../../subcomponent/pophover-difficulty/pophover-difficulty.component';
import { PophoverBadgesComponent } from '../../subcomponent/pophover-badges/pophover-badges.component';

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
  skillsModels= utility.skills

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
    private popoverCtrl: PopoverController
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
    console.log("a")
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
    const pop = await this.popoverCtrl.create({
      component: PophoverBadgesComponent
    })

    await pop.present()

    pop.onDidDismiss().then(res => {

    })
  }

}
