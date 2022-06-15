import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { lev_exp, Pg } from '../../models/pg.model';

@Component({
  selector: 'app-pg-modal',
  templateUrl: './pg-modal.component.html',
  styleUrls: ['./pg-modal.component.scss'],
})
export class PgModalComponent implements OnInit {
  @Input() title:string = "Crea un nuovo pg";
  public min!:number
  public max!:number
  @Input() pg:Pg

  public formPg = this.formBuilder.group({
    name: [''],
    giocatore: [''],
    exp: [''],
    level: [''],
  })

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}



  ngOnInit() {
    if(this.pg){
      this.formPg.get('name').setValue(this.pg.name);
      this.formPg.get('giocatore').setValue(this.pg.giocatore);
      this.formPg.get('exp').setValue(this.pg.exp);
      this.formPg.get('level').setValue(this.pg.level);
      
      const setter = this.formPg.get('level').value;

      this.min = lev_exp.find(el=>Object.keys(el)[0] == setter )[setter];
      this.max = lev_exp.find(el=>Object.keys(el)[0] == (Number(setter)+1).toString())[(Number(setter)+1).toString()];

    }
  }

  dismiss(){
    this.modalController.dismiss();
  }

  levelSet(event: CustomEvent){
    if(event.detail.value!=20){
      this.min = lev_exp.find(el=>Object.keys(el)[0] == event.detail.value )[event.detail.value];
      this.max = lev_exp.find(el=>Object.keys(el)[0] == (Number(event.detail.value)+1).toString())[(Number(event.detail.value)+1).toString()];
      this.formPg.get('exp').setValue(this.min);
    }else{
      this.max = 10000000000000000000000;
    }
  }


  createPg(){
    if((this.min<=this.formPg.get('exp').value && this.formPg.get('exp').value<this.max)){
      this.modalController.dismiss(this.formPg.value);
    }else{
      alert("Dai cazzo")
    }
  }

}
