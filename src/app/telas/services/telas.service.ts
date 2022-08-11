import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Telas } from '../models/telas';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelasService {

  private readonly API = '/assets/telas.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Telas[]>(this.API)
    .pipe(
      first (),
      delay(5000),
      tap(Telas => console.log(Telas))
    );
  }
}
