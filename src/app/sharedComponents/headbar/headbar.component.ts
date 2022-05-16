import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss'],
})
export class HeadbarComponent implements OnInit {
  @Input() title!: string
  constructor() { }

  ngOnInit() {}

}
