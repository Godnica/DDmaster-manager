import { Component, Input, OnInit } from '@angular/core';
import { Fight } from 'src/app/core/models/fight.model';
import { ModalController } from '@ionic/angular';
import { FightComponent } from '../../fight/fight.component';


@Component({
  selector: 'app-fights',
  templateUrl: './fights.component.html',
  styleUrls: ['./fights.component.scss'],
})
export class FightsComponent implements OnInit {
  @Input() idAdv:string;
  @Input() items: Array<Fight>
  constructor(
    private modal: ModalController 
  ) { }

  ngOnInit() {
    if(!this.items) this.items = []
  }

  async createMetch(){
    const modal = await this.modal.create({
      component: FightComponent,
      componentProps: {
        idAdv: this.idAdv
      }
    })

    await modal.present()
  }

}
