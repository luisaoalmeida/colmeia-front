import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doacao } from '../model/doacao';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoacoesService {

  private readonly API = 'api/doacoes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Doacao[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(doacoes => console.log(doacoes))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Doacao>(`${this.API}/${id}`);
  }

  save(record: Partial<Doacao>) {
    return this.httpClient.post<Doacao>(this.API, record).pipe(first());
  }
}
