import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { SharedComponentsModule } from 'src/app/sharedComponents/shared-components.module';
import { AdventureItemComponent } from 'src/app/core/components/items/adventure-item/adventure-item.component';
import { CreatebuttonComponent } from 'src/app/core/components/subcomponent/createbutton/createbutton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    SharedComponentsModule,    
  ],
  declarations: [ListPage, 
    AdventureItemComponent,
    CreatebuttonComponent
  ]
})
export class ListPageModule {}
