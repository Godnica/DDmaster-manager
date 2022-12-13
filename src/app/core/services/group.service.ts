import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  group?: Array<Object>
  constructor(
    group : Array<Object>
  ) { 
    this.group = group;
  }

  setGroup(g: Array<Object>){

  }

  getGroup(){
    return this.group;
  }


}
