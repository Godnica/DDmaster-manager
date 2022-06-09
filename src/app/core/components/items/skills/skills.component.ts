import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormSkillComponent } from '../../forms/skill/skill.component';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() idAdv
  @Input() items = []
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(
       this.idAdv,
       this.items
    )
  }


  async newAdventure(){
    const modal = await this.modalCtrl.create({
      component: FormSkillComponent,
      componentProps: {
        title: "Crea una nuova abilità",
        idAdv: this.idAdv
      }
    })

    await modal.present()

  }

}
