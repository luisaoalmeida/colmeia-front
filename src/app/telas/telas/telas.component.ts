import { TelasService } from './../services/telas.service';
import { Component, OnInit } from '@angular/core';
import { Telas } from '../models/telas';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.scss']
})
export class TelasComponent implements OnInit {

  telas$: Observable<Telas[]>;
  // telas: Tela[] = [];
  displayedColumns = ['name','category'];

  // telasService: TelasService;

  constructor(
    private telasService: TelasService,
    public dialog: MatDialog
    ) {
    // this.telas = [];
    // this.telasService = new TelasService();
    this.telas$ = this.telasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );


    // this.telasService.list().subscribe(telas => this.telas = telas);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  ngOnInit(): void {

  }

}
