import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { tebleExpXMonster } from 'src/app/core/models/incontri.model';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>()
  monsterFormvisible:boolean = false;
  addVisible: boolean = false;
  expLevel = tebleExpXMonster

  constructor(
    private fb: FormBuilder
  ) { }

  public monsterForm = this.fb.group({
    name: [''],
    life: [''],
    gs: ['']
  });

  ngOnInit() {}

  addMonster(){
    this.monsterFormvisible= true;
  }

  add_(){
    this.buttonClicked.emit(this.monsterForm.value);
    this.monsterFormvisible = false;
    this.addVisible = false;
    this.monsterForm.get('gs').setValue(null)
  }

  fillChar(char: string, event:Event){
    const e = (event as CustomEvent).detail.value;
    console.log(e)
    console.log(char);
    console.log( this.monsterForm.value)
    this.monsterForm.get(char).setValue(e);
    if(
      this.monsterForm.get('name').value &&
      this.monsterForm.get('life').value && 
      this.monsterForm.get('gs').value 
    )
    {
      this.addVisible = true;
    }else
    {
      this.addVisible = false;
    }
    
    // this.monsterForm.get()
  }

  



}
