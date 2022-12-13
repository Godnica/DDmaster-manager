import { Component, Inject, Input, OnInit } from '@angular/core';
import { Condictions, Pg } from 'src/app/core/models/pg.model';
import { ModalController } from '@ionic/angular';
import { PgModalComponent } from '../../pg-modal/pg-modal.component';
import { FiredbService } from 'src/app/core/services/firedb.service';
import { PopoverController } from '@ionic/angular';
import { PophoverBadgesComponent } from '../../subcomponent/pophover-badges/pophover-badges.component';

@Component({
  selector: 'app-pgs',
  templateUrl: './pgs.component.html',
  styleUrls: ['./pgs.component.scss'],
})
export class PgsComponent implements OnInit {
  @Input() idAdv:string;
  @Input() items: Array<Pg>;

  private condictions = Condictions

  constructor(
    private modalController: ModalController,
    private firedb: FiredbService,
    private popoverController: PopoverController
  ) { }


  ngOnInit() {
    if(!this.items){
      this.items = []
    }  
    console.log("....>", this.items);
    
  }

  async createPg(){
    const modal = await this.modalController.create({
      component: PgModalComponent
    })

    await modal.present();

    modal.onDidDismiss().then(res=>{
      console.log(res.data)
      if(res.data){
        this.firedb.add('pg', {id_adv: this.idAdv, ...res.data}).then((fop:any)=>{
          const pg = {id_adv: this.idAdv, ...res.data, ...fop._path.pieces_[1]}
          this.items.push(pg);
        })
      }
    });

  }

  async edit(pg){
    const modal = await this.modalController.create({
      component: PgModalComponent,
      componentProps: {
        pg: pg
      }
    })

    await modal.present();

    modal.onDidDismiss().then(res=>{
      console.log(this.items, pg.id);

      if(res.data){
        console.log("auiiii")
        this.firedb.update(`/pg/${pg.id}`, {...res.data, ...{id_adv: this.idAdv}})
        console.log(this.items.find(el=>el.id == pg.id))
        this.items = this.items.map(el=>{
            if(el.id == pg.id)
            {
              return {...res.data, ...{id_adv: this.idAdv}, ...{id: pg.id}, ...{conditions: pg.conditions}}
            }else{
              return el
            };
        })

        console.log(this.items)

      }
    })
  }

  async delete(pg){
    await this.firedb.deleteById(`/pg/${pg.id}`);
    this.items = this.items.filter(el=>el.id != pg.id);
  }


  async assignCondiction(pg){
    const popover = await this.popoverController.create({
      component: PophoverBadgesComponent,
      componentProps: {
        badges: this.condictions
      }
    });
    await popover.present();

    popover.onDidDismiss().then(res=>{
      console.log(res.data);
      if(res.data && res.data.length!=0){
        this.items = this.items.map(el=>{
          if(el.id == pg.id){
            this.firedb.update(`/pg/${pg.id}`, {...el, ...{conditions: res.data.concat(el.conditions)}})
            return {...el, ...{conditions: res.data.concat(el.conditions)}}
          }else{
            return el
          }     
        })
      }
      
    })

  }


  deleteCondiction(event:any){
    console.log(event);
    let pg = this.items.find(el=>el.id==event.pg_id)
    const newCondiction = pg.conditions.filter(el=>el.id!=event.condiction_id);
    pg.conditions = newCondiction;
    console.log(this.items);
    this.firedb.update(`/pg/${pg.id}`, pg);
  }


}
