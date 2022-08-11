import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { DoacoesListComponent } from './components/doacoes-list/doacoes-list.component';
import { DoacoesComponent } from './containers/doacoes/doacoes.component';
import { DoacaoFormComponent } from './containers/doacao-form/doacao-form.component';
import { DoacoesRoutingModule } from './doacoes-routing.module';


@NgModule({
  declarations: [
    DoacoesComponent,
    DoacaoFormComponent,
    DoacoesListComponent
  ],
  imports: [
    CommonModule,
    DoacoesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DoacoesModule { }
