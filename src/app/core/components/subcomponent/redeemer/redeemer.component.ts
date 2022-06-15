import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Badges } from 'src/app/core/models/badges.model';
import { ControllerService } from 'src/app/core/services/controller.service';
import { PophoverBadgesComponent } from '../pophover-badges/pophover-badges.component';

@Component({
  selector: 'app-redeemer',
  templateUrl: './redeemer.component.html',
  styleUrls: ['./redeemer.component.scss'],
})
export class RedeemerComponent implements OnInit {

  @Output() badgeOutput = new EventEmitter<Array<Badges>>()
  @Input() placeholder:string = '';
  @Input() label: string = '';
  badgesIn: Array<Badges> = [];
  @Input() badgeOut: Array<Badges> = [];
  @Input() type: string = 'ribbon';

  subs:Subscription = new Subscription();
  isready: boolean = false;

  constructor(
    private controller: ControllerService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.subs.add(this.controller.badges.subscribe(actualbadges => {
      this.badgesIn = actualbadges;
    }))

    setTimeout(() => {
      this.isready = true
    }, 100);

  }


  showPopBadge(){
    this.subs.add(this.controller.BadgesArr.subscribe(async (badges)=>{
      let badgeButton = [];
      badges.forEach(el=>{
        if(!this.badgeOut.find(b=>b.id===el.id)){
          badgeButton.push(el)
        }
      })

      const pop = await this.popoverCtrl.create({
        component: PophoverBadgesComponent,
        componentProps: {
          badges: badgeButton
        }
      })
  
      await pop.present()
  
      await pop.onDidDismiss().then(res => {
        if(res.data)
        {
        this.badgeOut = [...res.data, ...this.badgeOut];
        this.badgeOutput.emit(this.badgeOut);}
      })

    }))    
  }

  removeChip(badge){
    console.log(this.badgeOut, badge)
    this.badgeOut = this.badgeOut.filter(el=>el.id!==badge.id);
    this.badgeOutput.emit(this.badgeOut);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
