import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FiredbService } from '../../services/firedb.service';

@Component({
  selector: 'app-adventure-modal',
  templateUrl: './adventure-modal.component.html',
  styleUrls: ['./adventure-modal.component.scss'],
})
export class AdventureModalComponent implements OnInit {

  
  @Input() selected;
  
  public adventureForm = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });


  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private fireDb: FiredbService
  ) { }


  ngOnInit(): void {
   console.log("--->", this.selected);
   if(this.selected){
     this.adventureForm.get('title').setValue(this.selected.title)
     this.adventureForm.get('description').setValue(this.selected.description)
   }
  }


  dismissModal(v:boolean){
    v?
    this.modalController.dismiss(v):
    this.modalController.dismiss()
  }

  insertAdv() {
    if(this.selected){
      console.log(this.adventureForm.value);
      this.fireDb.update(`/adventures/${this.selected.id}`,
      this.adventureForm.value
      )
      this.dismissModal(this.adventureForm.value)
    }else{
      let newadv = this.adventureForm.value;
      this.fireDb.add("/adventures", newadv);
      this.dismissModal(newadv)
    }
  }
}
