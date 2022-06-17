import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cumulo',
  templateUrl: './cumulo.component.html',
  styleUrls: ['./cumulo.component.scss'],
})
export class CumuloComponent implements OnInit {
  @Input() cumolo;
  @Output() moneyDropper = new EventEmitter();
  @Output() oGDropper = new EventEmitter();
  @Output() magicDropper = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  
  assignMoney(money_type: string){
    if(this.cumolo.monete[money_type]<100){
      this.moneyDropper.emit({
        id: this.cumolo.id,
        money_type: money_type,
        quantity:this.cumolo.monete[money_type],
      });
      this.cumolo.monete[money_type] = 0
    }else{
      this.moneyDropper.emit({
        id: this.cumolo.id,
        money_type: money_type,
        quantity:100,
      });
    }
  }


  assignOG(og:any, type:string, value: number){
    console.log(og);
    this.oGDropper.emit({
      og: og,
      id: this.cumolo.id,
      type: type,
      value: value
    })
  }

  assignMagic(magic: string){
    this.magicDropper.emit({
      id: this.cumolo.id,
      magic: magic
    })
  }

  

}
