import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSnapshot } from 'firebase/database';
import { FiredbService } from 'src/app/core/services/firedb.service';
import { ModalController } from '@ionic/angular';
import { AdventureModalComponent } from 'src/app/core/components/adventure-modal/adventure-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public items: Array<any>  = []
  private buttontitle!: string
  selected: any;
  public initilizated : boolean = false

  constructor(
    private router: Router,
    private fireDb: FiredbService,
    private modal: ModalController
  ) {

  }

  ngOnInit() {
    const path = this.router.url.replace("/","");

    this.setCreateButtonTitle(path);

    console.log(path)
    this.fireDb.collection(path).then((items:DataSnapshot)=>{
      this.items = items.val();
      console.log("---->", this.items);
      this.initilizated = true
    });    
  }

  setCreateButtonTitle(path:string){
    switch (path) {
      case "adventures":
        this.buttontitle = "Crea una nuova avventura"
        break;
    
      default:
        break;
    }
  }

  async createItem($event: Event){
    const modal = await this.modal.create({
      component: AdventureModalComponent,
      componentProps: {
        selected: this.selected
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
