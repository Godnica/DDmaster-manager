import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InfoPopComponent } from '../info-pop/info-pop.component';

@Component({
  selector: 'app-item-condiction',
  templateUrl: './item-condiction.component.html',
  styleUrls: ['./item-condiction.component.scss'],
})
export class ItemCondictionComponent implements OnInit {
  @Input() condictions!: Array<any>
  @Output() deleter = new EventEmitter<any>();
  @Input() pg_id: string;
  @Input() isOpen: boolean = false;
  constructor(
    private popController : PopoverController
  ) { }

  ngOnInit() {
    console.log("ciao")
  }

  delete(condiction){
    this.condictions = this.condictions.filter(c=>c.id!==condiction.id);
    this.deleter.emit({ condiction_id: condiction.id, pg_id:  this.pg_id});
  }

  async assignPop(description:string){
    const pop = await this.popController.create({
      component: InfoPopComponent,
      componentProps: {
        info: description
      },
      side: "end"
    })

    await pop.present();

  }



}
