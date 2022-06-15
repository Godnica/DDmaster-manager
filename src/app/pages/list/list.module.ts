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


import { NotasComponent } from 'src/app/core/components/items/notas/notas.component';
import { NotasModalComponent } from 'src/app/core/components/notas-modal/notas-modal.component';
import { SkillsComponent } from 'src/app/core/components/items/skills/skills.component';
import { BadgesComponent } from 'src/app/core/components/items/badges/badges.component';
import { FormSkillComponent } from 'src/app/core/components/forms/skill/skill.component';
import { PophoverDifficultyComponent } from 'src/app/core/components/subcomponent/pophover-difficulty/pophover-difficulty.component';
import { PophoverBadgesComponent } from 'src/app/core/components/subcomponent/pophover-badges/pophover-badges.component';
import { RedeemerComponent } from 'src/app/core/components/subcomponent/redeemer/redeemer.component';
import { PgsComponent } from 'src/app/core/components/items/pgs/pgs.component';
import {PgModalComponent} from 'src/app/core/components/pg-modal/pg-modal.component';
import { ItemCondictionComponent } from 'src/app/core/components/subcomponent/item-condiction/item-condiction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    ListPage, 
    AdventureItemComponent,
    CreatebuttonComponent,
    AdventureModalComponent,
    NotasComponent,
    NotasModalComponent,
    SkillsComponent,
    BadgesComponent,
    FormSkillComponent,
    PophoverDifficultyComponent,
    PophoverBadgesComponent,
    RedeemerComponent,
    PgsComponent,
    PgModalComponent,
    ItemCondictionComponent
  ],
  entryComponents: [
    FormSkillComponent
  ]
})
export class ListPageModule {}
