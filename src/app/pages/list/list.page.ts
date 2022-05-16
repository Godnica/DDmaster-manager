import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSnapshot } from 'firebase/database';
import { FiredbService } from 'src/app/core/services/firedb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public items!: Array<any>
  private buttontitle!: string

  constructor(
    private router: Router,
    private fireDb: FiredbService
  ) {

  }

  ngOnInit() {
    const path = this.router.url.replace("/","");

    this.setCreateButtonTitle(path);

    console.log(path)
    this.fireDb.collection(path).then((items:DataSnapshot)=>{
      this.items = items.val();
      console.log("---->", this.items);
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


}
