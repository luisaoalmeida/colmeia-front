import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TelasRoutingModule } from './telas-routing.module';
import { TelasComponent } from './telas/telas.component';

@NgModule({
  declarations: [
    TelasComponent
  ],
  imports: [
    CommonModule,
    TelasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class TelasModule { }
