import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.scss'],
})
export class CreatebuttonComponent implements OnInit {
  @Input() path: string
  constructor() { }

  ngOnInit() {}

}
