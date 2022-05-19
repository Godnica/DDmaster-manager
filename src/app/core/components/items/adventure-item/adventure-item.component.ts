import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FiredbService } from 'src/app/core/services/firedb.service';
import { ModalController } from '@ionic/angular';
import { AdventureModalComponent } from '../../adventure-modal/adventure-modal.component';

@Component({
  selector: 'app-adventure-item',
  templateUrl: './adventure-item.component.html',
  styleUrls: ['./adventure-item.component.scss'],
})
export class AdventureItemComponent implements OnInit {
  @Input() items!: any

  adventures: Array<any> = []
  delete_modal_visibility:boolean = false;
  delete_id?:string

  constructor(
    private fireDb: FiredbService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(change: SimpleChange){
    if(this.items && change['items']){
      this.adventures = []
      Object.keys(this.items).forEach(adv=>{
        this.items[adv].id = adv
        this.adventures.push(this.items[adv])
      })
    }
  }

  delete(){
    this.adventures = this.adventures.filter(adv=>adv.id!=this.delete_id)
    this.fireDb.deleteById("/adventures/"+this.delete_id)
    this.dismiss()
  }

  dismiss(){
    this.delete_modal_visibility = false
  }

  openModal(id:string){
    console.log("ciao")
    this.delete_modal_visibility = true
    this.delete_id =id
  }

  async editAsventure(adv){
    
    const modal = await this.modal.create({
      component: AdventureModalComponent,
      componentProps: {
        selected: adv
      }
    })

    modal.onDidDismiss().then(resolve=>{

      if(resolve.data){
        console.log("iooooo", resolve.data)
        this.adventures = this.adventures.map(el=>{
          if(el.id===adv.id){
            el.description = resolve.data.description;
            el.title = resolve.data.title
            return el
          }
        })
      }
    })

    return modal.present()
  }

}
