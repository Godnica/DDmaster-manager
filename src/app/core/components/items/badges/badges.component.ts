import { Component, Input, OnInit } from '@angular/core';
import { FiredbService } from '../../../services/firedb.service';
import { FormBuilder} from '@angular/forms';
import { Badges } from 'src/app/core/models/badges.model';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {

  @Input() idAdv
  @Input() items
  active: boolean = false;
  formVisible:boolean = false;
  public badgeForm = this.fb.group({
    id_adv: [''],
    value: [''],
    name: [''],
    active: ['']
  })
  

  constructor(
    private fire: FiredbService,
    private fb: FormBuilder  
  ) { }

  ngOnInit() {
    
  }


  createBadge(){
    this.formVisible = true
    if(this.badgeForm.value.name){
      let payload = {...this.badgeForm.value, id_adv: this.idAdv, active: this.active};
      this.fire.add('badges', payload).then((el:any)=>{
        payload.id = el._path.pieces_[1]
      });

      this.items.push(payload);
      this.formVisible = false;
      this.badgeForm.reset()
    }
  }
  

  delete(badge: Badges){
    console.log(badge);
    this.fire.deleteById(`badges/${badge.id}`);
    this.items = this.items.filter(el=>el.id!=badge.id)
  }

  activebadge(badge:Badges, event: any){
    badge.active = event.detail.checked;
    this.fire.update(`badges/${badge.id}`, badge);
  }

  add(add: boolean, badge: Badges){

    console.log("oooo")

    badge.value = add ? badge.value + 1 : badge.value - 1
    this.items.map(el=>{
      if(el.id===badge.id){
        return badge
      }
    })
    this.fire.update(`badges/${badge.id}`, badge);
  }
}
