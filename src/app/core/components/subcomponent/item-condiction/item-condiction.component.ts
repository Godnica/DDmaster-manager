import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-condiction',
  templateUrl: './item-condiction.component.html',
  styleUrls: ['./item-condiction.component.scss'],
})
export class ItemCondictionComponent implements OnInit {
  @Input() condictions!: Array<any>
  @Output() deleter = new EventEmitter<any>();
  @Input() pg_id: string
  constructor() { }

  ngOnInit() {
    console.log("ciao")
  }

  delete(condiction){
    this.condictions = this.condictions.filter(c=>c.id!==condiction.id);
    this.deleter.emit({ condiction_id: condiction.id, pg_id:  this.pg_id});
  }

}
