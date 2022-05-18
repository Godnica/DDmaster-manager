import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { SharedComponentsModule } from 'src/app/sharedComponents/shared-components.module';
import { AdventureItemComponent } from 'src/app/core/components/items/adventure-item/adventure-item.component';
import { CreatebuttonComponent } from 'src/app/core/components/subcomponent/createbutton/createbutton.component';
import { AdventureModalComponent } from 'src/app/core/components/adventure-modal/adventure-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListPage, 
    AdventureItemComponent,
    CreatebuttonComponent,
    AdventureModalComponent
  ]
})
export class ListPageModule {}
