import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pop',
  templateUrl: './info-pop.component.html',
  styleUrls: ['./info-pop.component.scss'],
})
export class InfoPopComponent implements OnInit {
  @Input() info
  constructor() { }

  ngOnInit() {
    console.log(this.info)
  }

}
