import { TelasService } from './../services/telas.service';
import { Component, OnInit } from '@angular/core';
import { Telas } from '../models/telas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.scss']
})
export class TelasComponent implements OnInit {

  telas: Observable<Telas[]>;
  // telas: Tela[] = [];
  displayedColumns = ['name','category'];

  // telasService: TelasService;

  constructor(private telasService: TelasService) {
    // this.telas = [];
    // this.telasService = new TelasService();
    this.telas = this.telasService.list();

    // this.telasService.list().subscribe(telas => this.telas = telas);
  }

  ngOnInit(): void {

  }

}
