import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/core/services/controller.service';
@Component({
  selector: 'app-pophover-badges',
  templateUrl: './pophover-badges.component.html',
  styleUrls: ['./pophover-badges.component.scss'],
})
export class PophoverBadgesComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }
  

  ngOnInit() {
    
    this.controller.BadgesArr.subscribe(badges=>{
      console.log("ioooo", badges)
    })
  } 

}
