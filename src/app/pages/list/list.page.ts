import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { DataSnapshot } from 'firebase/database';
import { FiredbService } from 'src/app/core/services/firedb.service';
import { ModalController } from '@ionic/angular';
import { ControllerService } from 'src/app/core/services/controller.service';

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
  public path?: string;
  public title: string;
  public idAdv: string

  constructor(
    private router: Router,
    private fireDb: FiredbService,
    private modal: ModalController,
    private route: ActivatedRoute,
    private controller: ControllerService
  ) {
    this.fireDb.collection('badges').then(badges=>{
      let bpayload = []
      Object.keys(badges.val()).forEach(element => {
        console.log(element)
        if(badges.val()[element].id_adv===this.idAdv){
          bpayload.push(badges.val()[element])
        }       
      })
      this.controller.setBadges(bpayload);
    })
  }

  ngOnInit() {    
    
    this.route.paramMap.subscribe(params=>{
      this.idAdv = params.get('id_adv')
      this.path = params.get('param');
      this.setCreateButtonTitle(this.path);
  
      console.log(this.path)
      this.fireDb.collection(this.path).then((items:DataSnapshot)=>{
        
        this.items = items.val();
        if(params.get('id_adv') && this.items){
          let newItem = []
          Object.keys(this.items).forEach(element => {
            this.items[element]["id"]=element
            newItem.push(this.items[element]);
          });       
          this.items = newItem.filter(item=>item.id_adv===params.get('id_adv'))   
        }
        console.log("---->", this.items);
        this.initilizated = true
      });    
    })
  }

  setCreateButtonTitle(path:string){
    switch (path) {
      case "adventures":
        this.buttontitle = "Crea una nuova avventura";
        this.title = "Avvenure"
        break;
      case "notas":
        this.buttontitle = "Crea una nuova nota per la tua avventura"
        this.title ="Note"
        break;
      case "skills":
        this.buttontitle = "Crea una nuova nota per la tua avventura"
        this.title ="Abilità"
        break;
      case "badges":
        this.buttontitle = "Crea una nuova nota per la tua avventura"
        this.title ="Controlli"
        break;
      case "pg":
        this.buttontitle = "Crea una nuova nota per la tua avventura"
        this.title ="Il gruppo"
        break;
      case "treasure":
        this.title = "Tesoro";
        break
      case "fights":
        this.title = "Incontri";
        break
      default:
        break;
    }
  }

  reload(){
    this.ngOnInit()
  }
}
