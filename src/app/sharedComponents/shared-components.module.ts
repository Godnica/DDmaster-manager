import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadbarComponent } from './headbar/headbar.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeadbarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[HeadbarComponent]
})
export class SharedComponentsModule { }