import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Badges } from '../models/badges.model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  public BadgesArr = new Subject();
  
  constructor() { }

  setBadges(badges: Array<Badges>){
    this.BadgesArr.next(badges);
  }
}
