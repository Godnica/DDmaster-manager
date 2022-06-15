import { Component, Input, OnInit } from '@angular/core';
import { Badges } from 'src/app/core/models/badges.model';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-pophover-badges',
  templateUrl: './pophover-badges.component.html',
  styleUrls: ['./pophover-badges.component.scss'],
})
export class PophoverBadgesComponent implements OnInit {
  @Input() badges: Array<Badges>
  public badgetoshow: Array<Badges> = [];
  public badgeOut : Array<Badges> = [];
  constructor(
    private popHoverController: PopoverController
  ) { }
  

  ngOnInit() {   
    console.log(this.badges);
    console.log(this.badgetoshow);
  }
  
  addtotoshow(badge: Badges){
    this.badgeOut.push(badge);    
    this.badges = this.badges.filter(b=>b.id!==badge.id);
    console.log(this.badgetoshow)
    if(this.badges.length===0) this.dismiss()
  }

  dismiss(){
      this.popHoverController.dismiss(this.badgeOut)
  }


  ngOnDestory(){
    this.popHoverController.getTop().then(v => v ? this.popHoverController.dismiss() : null);
  }

}
