import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.scss'],
})
export class CreatebuttonComponent implements OnInit {
  @Input() path: string
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {}

  eventEmitter(){
    this.buttonClicked.emit('')
  }


}
