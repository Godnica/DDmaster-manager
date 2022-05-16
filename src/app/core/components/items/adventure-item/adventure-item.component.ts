import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-item',
  templateUrl: './adventure-item.component.html',
  styleUrls: ['./adventure-item.component.scss'],
})
export class AdventureItemComponent implements OnInit {
  @Input() items!: Array<any>
  constructor() { }

  ngOnInit() {
    console.log("from adventure card component", this.items);
  }

  ngOnChange(){
    
    
  }

}
