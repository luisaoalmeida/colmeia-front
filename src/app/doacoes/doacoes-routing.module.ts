import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoacoesComponent } from './containers/doacoes/doacoes.component';
import { DoacaoFormComponent } from './containers/doacao-form/doacao-form.component';
import { DoacaoResolver } from './guards/doacao.resolver';

const routes: Routes = [
  { path: '', component: DoacoesComponent },
  { path: 'new', component: DoacaoFormComponent, resolve: { doacao: DoacaoResolver } },
  { path: 'edit/:id', component: DoacaoFormComponent, resolve: { doacao: DoacaoResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoacoesRoutingModule { }
