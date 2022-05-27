import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FiredbService } from '../../services/firedb.service';

@Component({
  selector: 'app-notas-modal',
  templateUrl: './notas-modal.component.html',
  styleUrls: ['./notas-modal.component.scss'],
})
export class NotasModalComponent implements OnInit {
  @Input() selected
  @Input() idAdv

  public notasForm = this.fb.group({
    title: [''],
    description: [''],
    id_adv: [""],
  });

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private fireDb: FiredbService
  ) { }

  ngOnInit() {

    console.log(this.selected)
    
    this.notasForm.get('id_adv').setValue(this.idAdv)
    if(this.selected){
      this.notasForm.get('title').setValue(this.selected.title)
      this.notasForm.get('description').setValue(this.selected.description)
    }

  }

  dismissModal(v: any){
    v?
    this.modalController.dismiss(v):
    this.modalController.dismiss()
  }

  insertNota(){
    const newNota = this.notasForm.value  

    console.log(newNota);

    debugger

    if(!this.selected){
      this.fireDb.add("/notas", newNota);
    }else{
      this.fireDb.update("/notas/"+this.selected.id, newNota)
    }

    this.dismissModal({item: newNota});
    
  }

}
