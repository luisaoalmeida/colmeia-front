import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelasComponent } from './telas/telas.component';

const routes: Routes = [
  { path: '', component: TelasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelasRoutingModule { }
