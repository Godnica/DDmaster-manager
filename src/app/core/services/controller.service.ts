import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Badges } from '../models/badges.model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  public idAdv:string;
  public BadgesArr = new BehaviorSubject<Array<Badges>>([]);
  public badges = this.BadgesArr.asObservable();
  
  constructor() { }

  setBadges(badges: Array<Badges>){
    this.BadgesArr.next(badges);
  }
}
