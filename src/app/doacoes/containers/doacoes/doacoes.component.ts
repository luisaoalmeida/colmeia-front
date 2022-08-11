import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Doacao } from '../../model/doacao';
import { DoacoesService } from '../../services/doacoes.service';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.scss']
})
export class DoacoesComponent implements OnInit {

  doacoes$: Observable<Doacao[]>;

  constructor(
    private doacoesService: DoacoesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.doacoes$ = this.doacoesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar doações.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(doacao: Doacao) {
    this.router.navigate(['edit', doacao._id], { relativeTo: this.route });
  }

}
