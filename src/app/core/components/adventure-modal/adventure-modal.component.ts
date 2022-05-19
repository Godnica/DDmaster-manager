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
      this.dismissModal(true)
    }
  }
}




// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   ionicForm: FormGroup;
//   defaultDate = "1987-06-30";
//   isSubmitted = false;
//   constructor(public formBuilder: FormBuilder) { }
//   ngOnInit() {
//     this.ionicForm = this.formBuilder.group({
//       name: ['', [Validators.required, Validators.minLength(2)]],
//       email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
//       dob: [this.defaultDate],
//       mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
//     })
//   }
//   getDate(e) {
//     let date = new Date(e.target.value).toISOString().substring(0, 10);
//     this.ionicForm.get('dob').setValue(date, {
//       onlyself: true
//     })
//   }
//   get errorControl() {
//     return this.ionicForm.controls;
//   }
//   submitForm() {
//     this.isSubmitted = true;
//     if (!this.ionicForm.valid) {
//       console.log('Please provide all the required values!')
//       return false;
//     } else {
//       console.log(this.ionicForm.value)
//     }
//   }
// }