import { Component, Input, OnInit } from '@angular/core';
import { Fight } from 'src/app/core/models/fight.model';

@Component({
  selector: 'app-fights',
  templateUrl: './fights.component.html',
  styleUrls: ['./fights.component.scss'],
})
export class FightsComponent implements OnInit {
  @Input() idAdv:string;
  @Input() items: Array<Fight>
  constructor() { }

  ngOnInit() {
    if(!this.items) this.items = []
  }


}
