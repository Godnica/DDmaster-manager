import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FiredbService } from 'src/app/core/services/firedb.service';

@Component({
  selector: 'app-adventure-item',
  templateUrl: './adventure-item.component.html',
  styleUrls: ['./adventure-item.component.scss'],
})
export class AdventureItemComponent implements OnInit {
  @Input() items!: any

  adventures: Array<any> = []

  constructor(
    private fireDb: FiredbService
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

  delete(id: string){

  }

}
