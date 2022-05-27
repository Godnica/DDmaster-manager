import { Component, OnInit, Input } from '@angular/core';
import { FiredbService } from 'src/app/core/services/firedb.service';
import { ModalController } from '@ionic/angular';
import { NotasModalComponent } from '../../notas-modal/notas-modal.component';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {
  @Input() items;
  @Input() idAdv;


  constructor(
    private fire: FiredbService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(){

  }

  delete(a){
    this.fire.deleteById("/notas/"+a.id).then(()=>{
      this.items = this.items.filter(el=>el.id!=a.id);      
    });
  }

  async edit(item){
    const modal = await this.modal.create({
      component:  NotasModalComponent,
      componentProps: {
        selected : item,
        idAdv: this.idAdv
      }
    })

       modal.onDidDismiss().then(l=>{
      if(l.data){
        this.ngOnInit()
      }
    })
    return await modal.present();
  }

  async newNota(){
    const modal = await this.modal.create({
      component:  NotasModalComponent,
      componentProps: {
        idAdv: this.idAdv
      }
    })

       modal.onDidDismiss().then(l=>{
      if(l.data){
       this.ngOnInit()
      }
    })
    return await modal.present();
  }
}