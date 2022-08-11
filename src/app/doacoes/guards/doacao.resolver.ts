import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Doacao } from '../model/doacao';
import { DoacoesService } from '../services/doacoes.service';

@Injectable({
  providedIn: 'root'
})
export class DoacaoResolver implements Resolve<Doacao> {

  constructor(private service: DoacoesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Doacao> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '' });
  }
}
